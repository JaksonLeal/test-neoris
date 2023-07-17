package com.neoris.test.servicios.implementar;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.neoris.test.excepciones.ClienteException;
import com.neoris.test.modelo.Cliente;
import com.neoris.test.repositorio.ClienteRepositorio;
import com.neoris.test.servicios.ClienteServicio;

@Service
public class ClienteServImple implements ClienteServicio {

	@Autowired
	private ClienteRepositorio clienteRepositorio;

	@Override
	public ResponseEntity<?> guardarCliente(Cliente cliente) throws Exception {
		Cliente clienteLocal = clienteRepositorio.findByPersonaId(cliente.getPersona().getIdentificacion());
		if (clienteLocal == null) {
			clienteLocal = clienteRepositorio.save(cliente);
			return ResponseEntity.status(HttpStatus.CREATED)
					.body("Cliente creado, su ID es: " + clienteLocal.getClienteID());
		} else {
			return ResponseEntity.status(HttpStatus.OK).body(new ClienteException().getMessage());
		}
	}

	@Override
	public ResponseEntity<?> obtenerCliente(Long id) throws Exception {
		Cliente buscarCliente = clienteRepositorio.findByClienteID(id);
		if (buscarCliente != null) {
			return ResponseEntity.status(HttpStatus.OK).body(clienteRepositorio.findByClienteID(id));
		} else {
			return ResponseEntity.status(HttpStatus.OK)
					.body(new ClienteException("Cliente no encontrado").getMessage());
		}
	}

	@Override
	public ResponseEntity<?> actualizarCliente(Cliente cliente) throws Exception {
		Cliente clienteLocal = clienteRepositorio.findByClienteID(cliente.getClienteID());
		if (clienteLocal != null) {
			clienteRepositorio.save(cliente);
			return ResponseEntity.status(HttpStatus.OK).body("Cliente actualizado");
		} else {
			return ResponseEntity.status(HttpStatus.OK).body(new ClienteException("El cliente no existe").getMessage());
		}
	}

	@Override
	public ResponseEntity<?> eliminarCliente(Long id) throws Exception {
		clienteRepositorio.deleteById(id);
		Cliente clienteEliminado = clienteRepositorio.findByClienteID(id);
		if (clienteEliminado == null) {
			return ResponseEntity.status(HttpStatus.OK).body("Cliente eliminado");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body(new ClienteException("El cliente no se pudo eliminar").getMessage());
		}
	}

	@Override
	public ResponseEntity<?> listarClientes() {
		List<Cliente> listadoClientes = clienteRepositorio.findAll();
		if (!listadoClientes.isEmpty()) {
			return ResponseEntity.status(HttpStatus.OK).body(listadoClientes);
		} else {
			return ResponseEntity.status(HttpStatus.OK)
					.body(new ClienteException("No hay clientes para mostrar").getMessage());
		}
	}

}
