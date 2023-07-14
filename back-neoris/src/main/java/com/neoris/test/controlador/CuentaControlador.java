package com.neoris.test.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neoris.test.modelo.Cuenta;
import com.neoris.test.servicios.CuentaServicio;

@RestController
@RequestMapping("/cuentas")
@CrossOrigin("*")
public class CuentaControlador {

	@Autowired
	private CuentaServicio cuentaServicio;

	@PostMapping("/guardar")
	public ResponseEntity<?> guardarCuenta(@RequestBody Cuenta cuenta) throws Exception {
		System.out.println("la cuenta trae: " + cuenta.toString());
		return cuentaServicio.guardarCuenta(cuenta);
	}

	@GetMapping("/{numCuenta}")
	public ResponseEntity<Cuenta> obtenerCuenta(@PathVariable String numCuenta) throws Exception {
		System.out.println("el numCuenta es " + numCuenta);
		return ResponseEntity.ok(cuentaServicio.obtenerCuenta(numCuenta));
	}

	@PutMapping("/actualizar")
	public ResponseEntity<Cuenta> actualizarCuenta(@RequestBody Cuenta cuenta) throws Exception {
		System.out.println("la cuenta trae: " + cuenta.toString());
		return ResponseEntity.ok(cuentaServicio.actualizarCuenta(cuenta));
	}

	@DeleteMapping("/{numCuenta}")
	public void eliminarCuenta(@PathVariable String numCuenta) throws Exception {
		System.out.println("el numCuenta es: " + numCuenta);
		cuentaServicio.eliminarCuenta(numCuenta);
	}

	@GetMapping("/listar")
	public ResponseEntity<List<Cuenta>> listarCuentas() throws Exception {
		System.out.println("entro a listarCuentas");
		return ResponseEntity.ok(cuentaServicio.listarCuentas());
	}

}
