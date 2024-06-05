package org.example.demaoverflow_backend.domain.user.exception;

import org.example.demaoverflow_backend.global.error.exception.BusinessException;
import org.example.demaoverflow_backend.global.error.exception.ErrorCode;

public class PasswordMismatches extends BusinessException {

    public static PasswordMismatches Exception = new PasswordMismatches();

    public PasswordMismatches() { super(ErrorCode.PASSWORD_MISMATCHES); }
}
