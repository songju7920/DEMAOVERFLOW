package org.example.demaoverflow_backend.domain.user.controller;

import lombok.RequiredArgsConstructor;
import org.example.demaoverflow_backend.domain.user.dto.request.SignupRequestDto;
import org.example.demaoverflow_backend.domain.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/user/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public void CreateAcc(@RequestBody SignupRequestDto signupRequestDto) {
        userService.signup(signupRequestDto);
    }
}
