package com.neoris.test.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neoris.test.modelo.Persona;

public interface PersonaRepositorio extends JpaRepository<Persona, String> {

	public Persona findByIdentificacion(String identificacion);

}
