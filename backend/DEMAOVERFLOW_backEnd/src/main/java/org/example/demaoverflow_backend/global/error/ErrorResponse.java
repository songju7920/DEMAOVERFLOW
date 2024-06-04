package org.example.demaoverflow_backend.global.error;

import org.example.demaoverflow_backend.global.error.exception.ErrorCode;

import java.time.LocalDateTime;

public record ErrorResponse(
        int statusCode,
        String message,
        String description,
        LocalDateTime timeStamp
) {
    public static ErrorResponse of (ErrorCode errorCode, String description) {
        return new ErrorResponse(errorCode.getStatusCode(), errorCode.getMessage(), description, LocalDateTime.now());
    }
}
