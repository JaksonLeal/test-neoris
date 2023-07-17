package com.neoris.test.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class MySecurityConfig {

	@Bean
	BCryptPasswordEncoder passwordEncoder() { // codificar contraseña
		return new BCryptPasswordEncoder();
	}

}
