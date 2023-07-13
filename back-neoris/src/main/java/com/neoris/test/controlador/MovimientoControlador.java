package com.neoris.test.controlador;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neoris.test.modelo.Movimientos;
import com.neoris.test.servicios.MovimientosServicio;

@RestController
@RequestMapping("/movimientos")
@CrossOrigin("*")
public class MovimientoControlador {

	@Autowired
	private MovimientosServicio movimientosServicio;

	@PostMapping("/guardar")
	public ResponseEntity<?> guardarMovimiento(@RequestBody Movimientos Movimiento) throws Exception {
		System.out.println("El Movimiento trae: " + Movimiento.toString());
		return movimientosServicio.guardarMovimiento(Movimiento);
	}

	@GetMapping("/listar")
	public ResponseEntity<?> listarMovimientos() throws Exception {
		System.out.println("entro a listarMovimiento");
		return movimientosServicio.listarMovimientos();
	}
	
	@GetMapping("/buscarPorFeNom/{fecha}/{nombre}")
	public ResponseEntity<?> buscarPorFeNom(@PathVariable Date fecha, @PathVariable String nombre) throws Exception {
		System.out.println("Entro a buscarPorRango y trae"+fecha+"<>"+nombre);
		return movimientosServicio.buscarPorFeNom(fecha, nombre);
	}

}
