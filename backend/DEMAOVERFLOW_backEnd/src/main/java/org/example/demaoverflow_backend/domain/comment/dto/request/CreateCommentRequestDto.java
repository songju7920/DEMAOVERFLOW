package org.example.demaoverflow_backend.domain.comment.dto.request;

public record CreateCommentRequestDto (
        String contents,
        long postId
) {
}
