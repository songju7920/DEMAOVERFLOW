package org.example.demaoverflow_backend.domain.post.dto.respond;

public record SearchedPost(
        long postId,
        String title,
        String contents,
        String writer
) {
}
