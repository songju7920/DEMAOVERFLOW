package org.example.demaoverflow_backend.domain.user.service;

import org.example.demaoverflow_backend.domain.user.dto.request.LoginRequestDto;
import org.example.demaoverflow_backend.domain.user.dto.request.SignupRequestDto;
import org.example.demaoverflow_backend.domain.user.dto.respond.LoginRespondDto;

public interface UserService {

    public void signup(SignupRequestDto signupRequestDto);

    public LoginRespondDto login(LoginRequestDto loginRequestDto);
}