package com.neoris.test.servicios;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.neoris.test.modelo.Cliente;

public interface ClienteServicio {

	public ResponseEntity<?> guardarCliente(Cliente cliente) throws Exception;

	public Cliente obtenerCliente(Long id) throws Exception;

	public Cliente actualizarCliente(Cliente cliente) throws Exception;

	public void eliminarCliente(Long id) throws Exception;

	public List<Cliente> listarClientes();
	
}
