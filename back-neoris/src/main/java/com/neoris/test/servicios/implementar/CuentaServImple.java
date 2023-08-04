package com.neoris.test.servicios.implementar;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.neoris.test.excepciones.CuentaException;
import com.neoris.test.modelo.Cliente;
import com.neoris.test.modelo.Cuenta;
import com.neoris.test.repositorio.ClienteRepositorio;
import com.neoris.test.repositorio.CuentaRepositorio;
import com.neoris.test.servicios.CuentaServicio;

@Service
public class CuentaServImple implements CuentaServicio {

	@Autowired
	private CuentaRepositorio cuentaRepositorio;

	@Autowired
	private ClienteRepositorio clienteRepositorio;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public ResponseEntity<?> guardarCuenta(Cuenta cuenta) throws Exception {
		Cuenta cuentaLocal = cuentaRepositorio.findByNumCuenta(cuenta.getNumCuenta());
		Cliente clienteLocal = clienteRepositorio.findByClienteID(cuenta.getCliente().getClienteID());
		if (cuentaLocal == null) { // valida si no existe la cuenta en mySQL
			if (clienteLocal != null) { // valida si existe la cuenta en mySQL
				boolean validarContras = bCryptPasswordEncoder.matches(cuenta.getCliente().getContra(),
						clienteLocal.getContra());
				if (validarContras) { // valida si la contraseña digitada es igual a la contraseña en mySQL
					cuentaRepositorio.save(cuenta);
					return ResponseEntity.status(HttpStatus.OK).body("Cuenta creada!");
				}
				return ResponseEntity.status(HttpStatus.OK)
						.body(new CuentaException("Contraseña incorrecta").getMessage());
			} else {
				return ResponseEntity.status(HttpStatus.OK)
						.body(new CuentaException("No existe cliente con ese ID").getMessage());
			}
		} else {
			return ResponseEntity.status(HttpStatus.OK).body(new CuentaException().getMessage());
		}
	}

	@Override
	public ResponseEntity<?> obtenerCuenta(String numCuenta) throws Exception {

		Cuenta buscarCuenta = cuentaRepositorio.findByNumCuenta(numCuenta);
		if (buscarCuenta != null) { // valida si existe la cuenta en mySQL
			return ResponseEntity.status(HttpStatus.OK).body(cuentaRepositorio.findByNumCuenta(numCuenta));
		} else {
			return ResponseEntity.status(HttpStatus.OK).body(new CuentaException("Cuenta no encontrada").getMessage());
		}
	}

	@Override
	public ResponseEntity<?> actualizarCuenta(Cuenta cuenta) throws Exception {
		Cuenta cuentaLocal = cuentaRepositorio.findByNumCuenta(cuenta.getNumCuenta());
		if (cuentaLocal != null) { // valida si existe la cuenta en mySQL
			cuentaRepositorio.save(cuenta);
			return ResponseEntity.status(HttpStatus.OK).body("Cuenta actualizada");
		} else {
			return ResponseEntity.status(HttpStatus.OK).body(new CuentaException("La cuenta no existe").getMessage());
		}
	}

	@Override
	public ResponseEntity<?> eliminarCuenta(String numCuenta) throws Exception {
		cuentaRepositorio.deleteById(numCuenta);
		Cuenta cuentaEliminado = cuentaRepositorio.findByNumCuenta(numCuenta);
		if (cuentaEliminado == null) { // valida si la cuenta fue eliminada de mySQL
			return ResponseEntity.status(HttpStatus.OK).body("Cuenta eliminada");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body(new CuentaException("La cuenta no se pudo eliminar").getMessage());
		}
	}

	@Override
	public ResponseEntity<?> listarCuentas() {
		List<Cuenta> listadoCuentas = cuentaRepositorio.findAll();
		if (!listadoCuentas.isEmpty()) { // valida si no existen cuentas en mySQL
			return ResponseEntity.status(HttpStatus.OK).body(listadoCuentas);
		} else {
			return ResponseEntity.status(HttpStatus.OK)
					.body(new CuentaException("No hay cuentas para mostrar").getMessage());
		}
	}

}
