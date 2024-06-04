package org.example.demaoverflow_backend.global.security.jwt;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@Setter
@RequiredArgsConstructor
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {
    private final String prefix;
    private final String header;
    private final String secret;
    private final long accessExpiration;
    private final long refreshExpiration;
}
