package org.example.demaoverflow_backend.domain.user.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Data
@Entity
@DynamicInsert
@DynamicUpdate
public class User {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    long userId;

    @Column(nullable = false, length = 20)
    String username;

    @Column(nullable = false)
    String password;

    protected User() {}

    @Builder
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
