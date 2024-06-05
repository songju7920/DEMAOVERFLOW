package org.example.demaoverflow_backend.domain.user.repository;

import org.example.demaoverflow_backend.domain.user.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findUserByUserId(long userId);
    Optional<User> findUserByUsername(String username);
    Boolean existsByUsername(String username);
}
