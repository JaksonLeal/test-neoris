package com.neoris.test.servicios;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.neoris.test.modelo.Cuenta;

public interface CuentaServicio {

	public ResponseEntity<?> guardarCuenta(Cuenta cuenta) throws Exception;

	public Cuenta obtenerCuenta(String numCuenta) throws Exception;

	public Cuenta actualizarCuenta(Cuenta cuenta) throws Exception;

	public void eliminarCuenta(String numCuenta) throws Exception;

	public List<Cuenta> listarCuentas();
	
}
