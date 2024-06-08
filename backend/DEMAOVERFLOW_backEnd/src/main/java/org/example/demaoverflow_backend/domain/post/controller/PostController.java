package org.example.demaoverflow_backend.domain.post.controller;

import lombok.RequiredArgsConstructor;
import org.example.demaoverflow_backend.domain.post.dto.request.CreatePostRequest;
import org.example.demaoverflow_backend.domain.post.dto.respond.PostDetailRespondDto;
import org.example.demaoverflow_backend.domain.post.dto.respond.SearchPostsRespond;
import org.example.demaoverflow_backend.domain.post.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("/post/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createPost(Authentication authentication, @RequestBody CreatePostRequest createPostRequest) {
        postService.createPost(authentication, createPostRequest);
    }

    @GetMapping("/post/search")
    public SearchPostsRespond search(@RequestParam String keyword) {
        return postService.searchPost(keyword);
    }

    // 나중에 Comment도 같이 검색되게 코드 수정해야함.
    @GetMapping("/post/detail/{postId}")
    public PostDetailRespondDto getDetail(@PathVariable("postId") long postId) {
        return postService.getDetail(postId);
    }
}
