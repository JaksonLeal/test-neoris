package com.neoris.test.servicios.implementar;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.neoris.test.excepciones.MovimientoException;
import com.neoris.test.modelo.Cuenta;
import com.neoris.test.modelo.Movimientos;
import com.neoris.test.repositorio.CuentaRepositorio;
import com.neoris.test.repositorio.MovimientosRepositorio;
import com.neoris.test.servicios.MovimientosServicio;

@Service
public class MovimientosServImple implements MovimientosServicio {

	@Autowired
	private MovimientosRepositorio movimientosRepositorio;

	@Autowired
	private CuentaRepositorio cuentaRepositorio;

	@Override
	public ResponseEntity<?> guardarMovimiento(Movimientos movimiento) throws Exception {
		Movimientos movimientoLocal = movimientosRepositorio.save(movimiento);
		if (movimientoLocal.getID() != null) { // valida si pudo guardar el movimiento en mySQL
			Cuenta cuentaOperacion = cuentaRepositorio.findByNumCuenta(movimientoLocal.getCuenta().getNumCuenta());
			if (movimientoLocal.getTipoMovimiento().equals("retiro")) { // valida si el tipo de movimiento es retiro
				cuentaOperacion.setSaldoInicial(cuentaOperacion.getSaldoInicial() - movimientoLocal.getValor());
			} else if (movimientoLocal.getTipoMovimiento().equals("deposito")) { // valida si el tipo de movimiento es
																					// deposito
				cuentaOperacion.setSaldoInicial(cuentaOperacion.getSaldoInicial() + movimientoLocal.getValor());
			}
			cuentaRepositorio.save(cuentaOperacion);
			return ResponseEntity.status(HttpStatus.CREATED).body("Movimiento realizado con exito!");
		} else {
			return ResponseEntity.status(HttpStatus.OK).body(new MovimientoException().getMessage());
		}
	}

	@Override
	public ResponseEntity<?> listarMovimientos() {
		List<Movimientos> listadoMovimientos = movimientosRepositorio.findAll();
		if (!listadoMovimientos.isEmpty()) { // valida si existen movimientos en mySQL
			return ResponseEntity.status(HttpStatus.OK).body(listadoMovimientos);
		} else {
			return ResponseEntity.status(HttpStatus.OK)
					.body(new MovimientoException("No hay movimientos para mostrar").getMessage());
		}
	}

	@Override
	public ResponseEntity<?> buscarPorFeNom(Date fecha, String nombre) {
		List<Movimientos> busqueda = movimientosRepositorio.findBybFeNom(fecha, nombre);
		if (busqueda == null) // valida si no se encontro el reporte en mySQL
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new MovimientoException("Fecha y nombre no encontrado").getMessage());
		return ResponseEntity.ok(busqueda);
	}

}
