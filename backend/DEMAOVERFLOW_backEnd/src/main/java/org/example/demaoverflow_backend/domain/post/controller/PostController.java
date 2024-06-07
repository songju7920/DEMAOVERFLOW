package org.example.demaoverflow_backend.domain.post.controller;

import lombok.RequiredArgsConstructor;
import org.example.demaoverflow_backend.domain.post.dto.request.CreatePostRequest;
import org.example.demaoverflow_backend.domain.post.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("/post/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createPost(Authentication authentication, @RequestBody CreatePostRequest createPostRequest) {
        postService.createPost(authentication, createPostRequest);
    }
}
