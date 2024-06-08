package org.example.demaoverflow_backend.domain.comment.controller;

import lombok.RequiredArgsConstructor;
import org.example.demaoverflow_backend.domain.comment.dto.request.CreateCommentRequestDto;
import org.example.demaoverflow_backend.domain.comment.dto.respond.GetCommentListRespondDto;
import org.example.demaoverflow_backend.domain.comment.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/comment/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createComment(Authentication authentication, @RequestBody CreateCommentRequestDto createCommentRequestDto) {
        commentService.createComment(authentication, createCommentRequestDto);
    }

    @GetMapping("/comment/get/{postId}")
    public GetCommentListRespondDto getCommentList(@PathVariable("postId") long postId) {
        return commentService.getCommentList(postId);
    }
}
