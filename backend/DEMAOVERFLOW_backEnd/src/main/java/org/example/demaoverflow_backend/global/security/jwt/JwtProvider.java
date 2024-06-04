package org.example.demaoverflow_backend.global.security.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.example.demaoverflow_backend.global.security.auth.CustomUserDetailService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtProvider {
    private final JwtProperties jwtProperties;
    private final CustomUserDetailService customUserDetailService;

    // Access token 생성
    public String GenerateAccess(long user_id) {
        // 만료시간 계산
        long now = (new Date()).getTime();
        Date expireAt = new Date(now + jwtProperties.getAccessExpiration());

        // jwt 생성
        return Jwts.builder()
                .setSubject(Long.toString(user_id))
                .claim("type", "Access")
                .setExpiration(expireAt)
                .signWith(SignatureAlgorithm.ES512, jwtProperties.getSecret())
                .compact();
    }

    // jwt에서 Claim만 가져오기
    public Claims getClaim(String token) {
        try {
            return Jwts
                .parser()
                .setSigningKey(jwtProperties.getSecret())
                .parseClaimsJws(token)
                .getBody();
        } catch (Exception e) {
            throw new RuntimeException();
        }
    }

    // 해당 유저에 대한 Authentication 가져오기
    public Authentication getAuthentication(String token) {
        Claims claim = getClaim(token);
        UserDetails userDetails = customUserDetailService.loadUserByUser_id(Long.parseLong(claim.getSubject()));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    public String getToken(HttpServletRequest request) {
        String token = request.getHeader(jwtProperties.getHeader());

        if (StringUtils.hasText(jwtProperties.getPrefix()) && token.length() > jwtProperties.getPrefix().length() + 1
                && token.startsWith(jwtProperties.getPrefix())) {
            return token.substring(7);
        }
        return null;
    }
}
