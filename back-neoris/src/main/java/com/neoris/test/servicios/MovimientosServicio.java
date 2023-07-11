package com.neoris.test.servicios;

import org.springframework.http.ResponseEntity;

import com.neoris.test.modelo.Movimientos;

public interface MovimientosServicio {

	public ResponseEntity<?> guardarMovimiento(Movimientos movimiento) throws Exception;

	public ResponseEntity<?> listarMovimientos();

}
