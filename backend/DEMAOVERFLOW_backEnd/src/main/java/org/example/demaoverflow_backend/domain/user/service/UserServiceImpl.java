package org.example.demaoverflow_backend.domain.user.service;

import lombok.RequiredArgsConstructor;
import org.example.demaoverflow_backend.domain.user.dto.request.SignupRequestDto;
import org.example.demaoverflow_backend.domain.user.execption.UserAlreadyExists;
import org.example.demaoverflow_backend.domain.user.model.User;
import org.example.demaoverflow_backend.domain.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void signup(SignupRequestDto signupRequestDto) {
        String username = signupRequestDto.username();
        String password = signupRequestDto.username();

        if (userRepository.existsByUsername(username)) {
            throw UserAlreadyExists.EXCEPTION;
        }

        userRepository.save(User.builder()
                        .username(username)
                        .password(passwordEncoder.encode(password))
                        .build());
    }
}