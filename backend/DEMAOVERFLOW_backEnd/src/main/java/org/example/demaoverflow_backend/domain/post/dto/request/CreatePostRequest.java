package org.example.demaoverflow_backend.domain.post.dto.request;

public record CreatePostRequest(
        String title,
        String contents
) {
}
