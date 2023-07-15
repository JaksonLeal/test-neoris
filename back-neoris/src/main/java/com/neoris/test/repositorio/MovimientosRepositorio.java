package com.neoris.test.repositorio;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.neoris.test.modelo.Movimientos;

public interface MovimientosRepositorio extends JpaRepository<Movimientos, Long> {

	public Movimientos findByID(Long ID);

	@Query(value = "SELECT * FROM movimientos m "
			+ "where cuenta_num_cuenta = (SELECT num_cuenta FROM cuenta where cliente_clienteid = (select clienteid from cliente where persona_id = (select identificacion from persona where nombre  = ?2)))"
			+ "and m.fecha >= ?1", nativeQuery = true)
	public List<Movimientos> findBybFeNom(Date fecha, String nombre);

}
