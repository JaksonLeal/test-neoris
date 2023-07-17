package com.neoris.test.servicios;

import org.springframework.http.ResponseEntity;

import com.neoris.test.modelo.Cuenta;

public interface CuentaServicio {

	public ResponseEntity<?> guardarCuenta(Cuenta cuenta) throws Exception;

	public ResponseEntity<?> obtenerCuenta(String numCuenta) throws Exception;

	public ResponseEntity<?> actualizarCuenta(Cuenta cuenta) throws Exception;

	public ResponseEntity<?> eliminarCuenta(String numCuenta) throws Exception;

	public ResponseEntity<?> listarCuentas();

}
