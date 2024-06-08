package org.example.demaoverflow_backend.domain.comment.dto.respond;

public record GetComment (
        String username,
        String contents,
        String createAt
) {
}
