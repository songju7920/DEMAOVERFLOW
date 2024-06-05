package org.example.demaoverflow_backend.domain.user.exception;

import org.example.demaoverflow_backend.global.error.exception.BusinessException;
import org.example.demaoverflow_backend.global.error.exception.ErrorCode;

public class UserAlreadyExists extends BusinessException {

    public static final UserAlreadyExists EXCEPTION = new UserAlreadyExists();

    public UserAlreadyExists() { super(ErrorCode.USER_ALREADY_EXISTS); }
}
