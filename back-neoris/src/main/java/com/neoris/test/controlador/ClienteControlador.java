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

import com.neoris.test.modelo.Cliente;
import com.neoris.test.servicios.ClienteServicio;

@RestController
@RequestMapping("/clientes")
@CrossOrigin("*")
public class ClienteControlador {

	@Autowired
	private ClienteServicio clienteServicio;

	@PostMapping("/guardar")
	public ResponseEntity<?> guardarCliente(@RequestBody Cliente cliente) throws Exception {
		System.out.println("el cliente trae: " + cliente.toString());
		return clienteServicio.guardarCliente(cliente);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Cliente> obtenerCliente(@PathVariable Long id) throws Exception {
		System.out.println("el clienteID es " + id);
		return ResponseEntity.ok(clienteServicio.obtenerCliente(id));
	}

	@PutMapping("/actualizar")
	public ResponseEntity<Cliente> actualizarCliente(@RequestBody Cliente cliente) throws Exception {
		System.out.println("el cliente trae: " + cliente.toString());
		return ResponseEntity.ok(clienteServicio.actualizarCliente(cliente));
	}

	@DeleteMapping("/{id}")
	public void eliminarCliente(@PathVariable Long id) throws Exception {
		System.out.println("el clienteID es: " + id);
		clienteServicio.eliminarCliente(id);
	}

	@GetMapping("/listar")
	public ResponseEntity<List<Cliente>> listarClientes() throws Exception {
		System.out.println("entro a listarClientes");
		return ResponseEntity.ok(clienteServicio.listarClientes());
	}

}
