package com.neoris.test.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
	
	@Autowired(required=true)
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@PostMapping("/guardar")
	public ResponseEntity<?> guardarCliente(@RequestBody Cliente cliente) throws Exception {
		System.out.println("el cliente trae: " + cliente.toString());
		cliente.setContra(this.bCryptPasswordEncoder.encode(cliente.getContra()));
		return clienteServicio.guardarCliente(cliente);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> obtenerCliente(@PathVariable Long id) throws Exception {
		System.out.println("el clienteID es " + id);
		return clienteServicio.obtenerCliente(id);
	}

	@PutMapping("/actualizar")
	public ResponseEntity<?> actualizarCliente(@RequestBody Cliente cliente) throws Exception {
		System.out.println("el cliente trae: " + cliente.toString());
		cliente.setContra(this.bCryptPasswordEncoder.encode(cliente.getContra()));
		return clienteServicio.actualizarCliente(cliente);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> eliminarCliente(@PathVariable Long id) throws Exception {
		System.out.println("el clienteID es: " + id);
		return clienteServicio.eliminarCliente(id);
	}

	@GetMapping("/listar")
	public ResponseEntity<?> listarClientes() throws Exception {
		System.out.println("entro a listarClientes");
		return clienteServicio.listarClientes();
	}

}
