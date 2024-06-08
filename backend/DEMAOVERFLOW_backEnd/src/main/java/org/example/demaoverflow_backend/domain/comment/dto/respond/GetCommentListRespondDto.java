package org.example.demaoverflow_backend.domain.comment.dto.respond;

import java.util.List;

public record GetCommentListRespondDto(
        List<GetComment> commentList
) {
}
