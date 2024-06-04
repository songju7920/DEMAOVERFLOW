package org.example.demaoverflow_backend.global.security.auth;

import lombok.RequiredArgsConstructor;
import org.example.demaoverflow_backend.domain.user.model.User;
import org.example.demaoverflow_backend.domain.user.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }

    public UserDetails loadUserByUser_id(Long userId) throws UsernameNotFoundException {

        User user = userRepository.findUserByUserId(userId).orElseThrow();

        return new CustomUserDetail(user.getUserId());
    }
}
