package com.neoris.test.servicios.implementar;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.neoris.test.excepciones.ClienteEncontradoException;
import com.neoris.test.modelo.Cliente;
import com.neoris.test.repositorio.ClienteRepositorio;
import com.neoris.test.repositorio.PersonaRepositorio;
import com.neoris.test.servicios.ClienteServicio;

@Service
public class ClienteServImple implements ClienteServicio {

	@Autowired
	private ClienteRepositorio clienteRepositorio;

	@Autowired
	private PersonaRepositorio personaRepositorio;
	
	@Override
	public ResponseEntity<?> guardarCliente(Cliente cliente) throws Exception {
		Cliente clienteLocal = clienteRepositorio.findByPersonaId(cliente.getPersona().getIdentificacion());
		if (clienteLocal == null) {
			clienteRepositorio.save(cliente);
			return ResponseEntity.status(HttpStatus.CREATED).body("Cliente creado");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ClienteEncontradoException().getMessage());
		}
	}

	@Override
	public Cliente obtenerCliente(Long id) throws Exception {
		return clienteRepositorio.findByClienteID(id);
	}

	@Override
	public Cliente actualizarCliente(Cliente cliente) throws Exception {

		Cliente clienteLocal = clienteRepositorio.findByClienteID(cliente.getClienteID());
		if (clienteLocal != null) {
			clienteRepositorio.save(cliente);
		} else {
			System.out.println("el cliente no existe");
			throw new ClienteEncontradoException("El cliente no existe");
		}

		return clienteLocal;

	}

	@Override
	public void eliminarCliente(Long id) throws Exception {
		clienteRepositorio.deleteById(id);
	}

	@Override
	public List<Cliente> listarClientes() {
		return clienteRepositorio.findAll();
	}

}
