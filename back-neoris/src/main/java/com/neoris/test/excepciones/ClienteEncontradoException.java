package com.neoris.test.excepciones;

public class ClienteEncontradoException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ClienteEncontradoException() {
		super("El cliente con ese nombre de ID ya existe en la base de datos, intente nuevamente!");
		// TODO Auto-generated constructor stub
	}

	public ClienteEncontradoException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	
}
