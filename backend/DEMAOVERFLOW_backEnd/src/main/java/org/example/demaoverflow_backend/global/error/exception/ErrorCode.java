package org.example.demaoverflow_backend.global.error.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    // user
    USER_ALREADY_EXISTS(409, "이미 존재하는 유저 이름입니다"),

    // general
    BAD_REQUEST(400, "잘못된 요청입니다."),
    INTERNAL_SERVER_ERROR(500, "서버 에러");

    private final int StatusCode;
    private final String message;
}
