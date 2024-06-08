package org.example.demaoverflow_backend.domain.comment.service;

import lombok.RequiredArgsConstructor;
import org.example.demaoverflow_backend.domain.comment.dto.request.CreateCommentRequestDto;
import org.example.demaoverflow_backend.domain.comment.dto.respond.GetComment;
import org.example.demaoverflow_backend.domain.comment.dto.respond.GetCommentListRespondDto;
import org.example.demaoverflow_backend.domain.comment.model.Comment;
import org.example.demaoverflow_backend.domain.comment.repository.CommentRepository;
import org.example.demaoverflow_backend.domain.post.exception.PostNotExists;
import org.example.demaoverflow_backend.domain.post.model.Post;
import org.example.demaoverflow_backend.domain.post.repository.PostRepository;
import org.example.demaoverflow_backend.domain.user.exception.UserNotExists;
import org.example.demaoverflow_backend.domain.user.model.User;
import org.example.demaoverflow_backend.domain.user.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService{
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    @Override
    public void createComment(Authentication authentication, CreateCommentRequestDto createCommentRequestDto) {
        long userId = Long.parseLong(authentication.getName());
        long postId = createCommentRequestDto.postId();
        String contents = createCommentRequestDto.contents();

        User user = userRepository.findUserByUserId(userId).orElseThrow(() -> UserNotExists.Exception);
        Post post = postRepository.searchByPostId(postId).orElseThrow(() -> PostNotExists.Exception);

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String createdAt = dateFormat.format(new Date());

        commentRepository.save(Comment.builder()
                        .contents(contents)
                        .createdAt(createdAt)
                        .user(user)
                        .post(post)
                        .build());
    }

    @Override
    public GetCommentListRespondDto getCommentList(long postId) {
        List<Comment> comments = commentRepository.findCommentByPost(postRepository.searchByPostId(postId).orElseThrow(
                () -> PostNotExists.Exception
        ));

        List<GetComment> commentList = new ArrayList<>();
        for (Comment comment : comments) {
            commentList.add(new GetComment(
                    comment.getUser().getUsername(),
                    comment.getContents(),
                    comment.getCreatedAt()));
        }

        return new GetCommentListRespondDto(commentList);
    }
}
