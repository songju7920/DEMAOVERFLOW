package org.example.demaoverflow_backend.domain.user.dto.respond;

import java.util.Date;

public record LoginRespondDto (
        String accessToken,
        String refreshToken,
        String refreshExpireAt,
        String accessExpireAt
) {
}
