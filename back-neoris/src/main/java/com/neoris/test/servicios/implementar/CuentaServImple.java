package com.neoris.test.servicios.implementar;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.neoris.test.excepciones.ClienteEncontradoException;
import com.neoris.test.excepciones.CuentaEncontradaException;
import com.neoris.test.modelo.Cuenta;
import com.neoris.test.repositorio.CuentaRepositorio;
import com.neoris.test.servicios.CuentaServicio;

@Service
public class CuentaServImple implements CuentaServicio {

	@Autowired
	private CuentaRepositorio cuentaRepositorio;

	@Override
	public ResponseEntity<?> guardarCuenta(Cuenta cuenta) throws Exception {
		Cuenta cuentaLocal = cuentaRepositorio.findByNumCuenta(cuenta.getNumCuenta());
		System.out.println("jakson"+ cuentaLocal);
		if (cuentaLocal == null) {
			cuentaLocal = cuentaRepositorio.save(cuenta);
			return ResponseEntity.status(HttpStatus.CREATED).body("Cuenta creada!");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new CuentaEncontradaException().getMessage());
		}
	}

	@Override
	public Cuenta obtenerCuenta(String numCuenta) throws Exception {
		return cuentaRepositorio.findByNumCuenta(numCuenta);
	}

	@Override
	public Cuenta actualizarCuenta(Cuenta cuenta) throws Exception {
		Cuenta cuentaLocal = cuentaRepositorio.findByNumCuenta(cuenta.getNumCuenta());
		if (cuentaLocal != null) {
			cuentaRepositorio.save(cuenta);
		} else {
			System.out.println("La cuenta no existe");
			throw new ClienteEncontradoException("La cuenta no existe");
		}
		return cuentaLocal;
	}

	@Override
	public void eliminarCuenta(String numCuenta) throws Exception {
		cuentaRepositorio.deleteById(numCuenta);
	}

	@Override
	public List<Cuenta> listarCuentas() {
		return cuentaRepositorio.findAll();
	}

}
