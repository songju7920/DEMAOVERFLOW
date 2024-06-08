package org.example.demaoverflow_backend.domain.post.dto.respond;

public record PostDetailRespondDto (
        String title,
        String contents,
        String createAt,
        long views,
        String username
) {
}
