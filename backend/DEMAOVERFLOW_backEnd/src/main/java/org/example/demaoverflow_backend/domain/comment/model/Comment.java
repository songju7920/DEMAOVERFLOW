package org.example.demaoverflow_backend.domain.comment.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import org.example.demaoverflow_backend.domain.post.model.Post;
import org.example.demaoverflow_backend.domain.user.model.User;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Data
@Entity
@DynamicInsert
@DynamicUpdate
public class Comment {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    long commentId;

    @Column(columnDefinition = "TEXT", nullable = false)
    String contents;

    @Column(nullable = false)
    String createdAt;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId", nullable = false)
    User user;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "postId", nullable = false)
    Post post;

    protected Comment() {}

    @Builder
    public Comment(String contents, String createdAt, User user, Post post) {
        this.contents = contents;
        this.createdAt = createdAt;
        this.user = user;
        this.post = post;
    }
}
