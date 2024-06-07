package org.example.demaoverflow_backend.domain.post.dto.respond;

import java.sql.Timestamp;

public record SearchedPost(
        long postId,
        String title,
        String contents,
        String writer,
        String createAt,
        long view
) {
}
