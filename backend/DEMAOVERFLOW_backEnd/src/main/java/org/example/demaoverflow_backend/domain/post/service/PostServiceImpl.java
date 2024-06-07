package org.example.demaoverflow_backend.domain.post.service;

import lombok.RequiredArgsConstructor;
import org.example.demaoverflow_backend.domain.post.dto.request.CreatePostRequest;
import org.example.demaoverflow_backend.domain.post.dto.respond.SearchPostsRespond;
import org.example.demaoverflow_backend.domain.post.dto.respond.SearchedPost;
import org.example.demaoverflow_backend.domain.post.model.Post;
import org.example.demaoverflow_backend.domain.post.repository.PostRepository;
import org.example.demaoverflow_backend.domain.user.exception.UserNotExists;
import org.example.demaoverflow_backend.domain.user.model.User;
import org.example.demaoverflow_backend.domain.user.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    
    @Override
    public void createPost(Authentication authentication, CreatePostRequest createPostRequest) {
        System.out.println(authentication.getName());
        long userId = Long.parseLong(authentication.getName());
        String title = createPostRequest.title();
        String contents = createPostRequest.contents();

        User user = userRepository.findUserByUserId(userId).orElseThrow(() -> UserNotExists.Exception);

        postRepository.save(Post.builder()
                        .title(title)
                        .contents(contents)
                        .user(user)
                        .build()
        );
    }

    @Override
    public SearchPostsRespond searchPost(String keyword) {

        List<Post> posts = postRepository.searchAllByTitleContainingOrContentsContaining(keyword, keyword);

        List<SearchedPost> processedPosts = new ArrayList<>();
        for (Post post : posts) {
            processedPosts.add(new SearchedPost(
                    post.getPostId(),
                    post.getTitle(),
                    post.getContents(),
                    post.getUser().getUsername())
            );
        }

        return new SearchPostsRespond(processedPosts);
    }
}
