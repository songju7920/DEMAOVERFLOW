package org.example.demaoverflow_backend.domain.post.service;

import org.example.demaoverflow_backend.domain.post.dto.request.CreatePostRequest;
import org.example.demaoverflow_backend.domain.post.dto.respond.SearchPostsRespond;
import org.springframework.security.core.Authentication;

public interface PostService {

    void createPost(Authentication authentication, CreatePostRequest createPostRequest);

    SearchPostsRespond searchPost (String keyword);
}
