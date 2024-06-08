package org.example.demaoverflow_backend.domain.post.exception;

import org.example.demaoverflow_backend.global.error.exception.BusinessException;
import org.example.demaoverflow_backend.global.error.exception.ErrorCode;

public class PostNotExists extends BusinessException {
    public static PostNotExists Exception = new PostNotExists();

    public PostNotExists() {
        super(ErrorCode.POST_NOT_EXISTS);
    }
}
