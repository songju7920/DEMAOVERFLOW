package org.example.demaoverflow_backend.domain.post.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import org.example.demaoverflow_backend.domain.user.model.User;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.sql.Timestamp;

@Data
@Entity
@DynamicUpdate
@DynamicInsert
public class Post {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    long postId;

    @Column(length = 30, nullable = false)
    String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    String contents;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    User user;

    @Column(nullable = false)
    @ColumnDefault("0")
    long views;

    @Column(nullable = false)
    String createdAt;

    protected Post () {}

    @Builder
    public Post(String title, String contents, User user, String createdAt) {
        this.title = title;
        this.contents = contents;
        this.user = user;
        this.createdAt = createdAt;
    }
}
