package com.neoris.test.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.neoris.test.modelo.Cliente;

public interface ClienteRepositorio extends JpaRepository<Cliente, Long> {

	public Cliente findByClienteID(Long clienteID);

	@Query(value = "SELECT * FROM cliente c where c.persona_id = ?1", nativeQuery = true)
	public Cliente findByPersonaId(String personaId);

}
