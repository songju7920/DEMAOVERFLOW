package org.example.demaoverflow_backend.domain.user.service;

import org.example.demaoverflow_backend.domain.user.dto.request.SignupRequestDto;
import org.springframework.stereotype.Service;

public interface UserService {

    public void signup(SignupRequestDto signupRequestDto);
}