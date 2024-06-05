package org.example.demaoverflow_backend.domain.user.dto.request;

public record LoginRequestDto (
        String username,
        String password
) {
}
