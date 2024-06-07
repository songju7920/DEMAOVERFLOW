package org.example.demaoverflow_backend.domain.post.repository;

import org.example.demaoverflow_backend.domain.post.model.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Long> {

}
