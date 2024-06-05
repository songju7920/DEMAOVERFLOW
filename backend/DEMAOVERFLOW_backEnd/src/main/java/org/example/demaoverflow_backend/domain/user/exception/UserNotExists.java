package org.example.demaoverflow_backend.domain.user.exception;

import org.example.demaoverflow_backend.global.error.exception.BusinessException;
import org.example.demaoverflow_backend.global.error.exception.ErrorCode;

public class UserNotExists extends BusinessException {

    public static UserNotExists Exception = new UserNotExists();

    public UserNotExists() {
        super(ErrorCode.USER_NOT_EXISTS);
    }
}
