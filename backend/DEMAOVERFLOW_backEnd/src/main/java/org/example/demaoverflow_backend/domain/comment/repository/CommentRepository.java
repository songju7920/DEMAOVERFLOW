package org.example.demaoverflow_backend.domain.comment.repository;

import org.example.demaoverflow_backend.domain.comment.model.Comment;
import org.example.demaoverflow_backend.domain.post.model.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, Long> {
    List<Comment> findCommentByPost(Post post);
}
