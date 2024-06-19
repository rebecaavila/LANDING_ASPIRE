package com.miempresa;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.miempresa.modelo.Usuario;
import com.miempresa.repository.IUsuario;

@SpringBootTest
class ProyectoAspireApplicationTests {

	@Autowired
	private IUsuario repo;

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder bcpe = new BCryptPasswordEncoder();
		return bcpe;
	}

	@Autowired
	private BCryptPasswordEncoder encoder;

	@Test
	void crearUsuario() {
		Usuario user = new Usuario();
		user.setId(2);
		user.setNombre("usuario2");
		user.setClave(encoder.encode("1234"));
		user.setRol("ROLE_USER");
		repo.save(user);
	}

}
