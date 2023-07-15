package com.neoris.test.servicios.implementar;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.neoris.test.excepciones.MovimientoEncontradoException;
import com.neoris.test.modelo.Movimientos;
import com.neoris.test.repositorio.MovimientosRepositorio;
import com.neoris.test.servicios.MovimientosServicio;

@Service
public class MovimientosServImple implements MovimientosServicio {

	@Autowired
	private MovimientosRepositorio movimientosRepositorio;

	@Override
	public ResponseEntity<?> guardarMovimiento(Movimientos movimiento) throws Exception {
		Movimientos movimientoLocal = movimientosRepositorio.findByID(movimiento.getID());
		if (movimientoLocal == null) {
			movimientoLocal = movimientosRepositorio.save(movimiento);
			return ResponseEntity.status(HttpStatus.CREATED).body("Movimiento realizado con exito!");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MovimientoEncontradoException());
		}
	}

	@Override
	public ResponseEntity<?> listarMovimientos() {
		return ResponseEntity.ok(movimientosRepositorio.findAll());
	}

	@Override
	public ResponseEntity<?> buscarPorFeNom(Date fecha, String nombre) {
		List<Movimientos> busqueda = movimientosRepositorio.findBybFeNom(fecha, nombre);
		if (busqueda == null)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new MovimientoEncontradoException("Fecha y nombre no encontrado").getMessage());

		return ResponseEntity.ok(busqueda);
	}

}
