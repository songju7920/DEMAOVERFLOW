package org.example.demaoverflow_backend.domain.post.service;

import org.example.demaoverflow_backend.domain.post.dto.request.CreatePostRequest;
import org.springframework.security.core.Authentication;

public interface PostService {

    public void createPost(Authentication authentication, CreatePostRequest createPostRequest);
}
