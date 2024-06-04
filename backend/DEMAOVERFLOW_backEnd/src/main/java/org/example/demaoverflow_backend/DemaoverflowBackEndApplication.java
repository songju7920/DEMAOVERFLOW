package org.example.demaoverflow_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class DemaoverflowBackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemaoverflowBackEndApplication.class, args);
    }

}
