package com.neoris.test.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neoris.test.modelo.Movimientos;

public interface MovimientosRepositorio extends JpaRepository<Movimientos, Long> {

	public Movimientos findByID(Long ID);

}
