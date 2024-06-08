package org.example.demaoverflow_backend.domain.comment.controller;

import lombok.RequiredArgsConstructor;
import org.example.demaoverflow_backend.domain.comment.dto.request.CreateCommentRequestDto;
import org.example.demaoverflow_backend.domain.comment.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CommentController {
    
    private final CommentService commentService;

    @PostMapping("/comment/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createPost(Authentication authentication, @RequestBody CreateCommentRequestDto createCommentRequestDto) {
        commentService.createComment(authentication, createCommentRequestDto);
    }
}
