package com.neoris.test.servicios;

import org.springframework.http.ResponseEntity;

import com.neoris.test.modelo.Cliente;

public interface ClienteServicio {

	public ResponseEntity<?> guardarCliente(Cliente cliente) throws Exception;

	public ResponseEntity<?> obtenerCliente(Long id) throws Exception;

	public ResponseEntity<?> actualizarCliente(Cliente cliente) throws Exception;

	public ResponseEntity<?> eliminarCliente(Long id) throws Exception;

	public ResponseEntity<?> listarClientes();

}
