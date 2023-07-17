package com.neoris.test.excepciones;

public class ClienteException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ClienteException() {
		super("El cliente con ese numero de identificacion ya existe en la base de datos");
		// TODO Auto-generated constructor stub
	}

	public ClienteException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	
}
