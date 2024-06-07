package org.example.demaoverflow_backend.domain.post.dto.respond;

import java.util.List;

public record SearchPostsRespond(
        List<SearchedPost> posts
) {

}
