package org.example.demaoverflow_backend.domain.comment.repository;

import org.example.demaoverflow_backend.domain.comment.model.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Long> {
}
