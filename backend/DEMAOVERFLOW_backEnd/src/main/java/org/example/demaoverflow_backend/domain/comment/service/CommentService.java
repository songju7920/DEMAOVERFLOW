package org.example.demaoverflow_backend.domain.comment.service;

import org.example.demaoverflow_backend.domain.comment.dto.request.CreateCommentRequestDto;
import org.example.demaoverflow_backend.domain.comment.dto.respond.GetCommentListRespondDto;
import org.springframework.security.core.Authentication;

public interface CommentService {
    void createComment(Authentication authentication, CreateCommentRequestDto createCommentRequestDto);

    GetCommentListRespondDto getCommentList(long postId);
}
