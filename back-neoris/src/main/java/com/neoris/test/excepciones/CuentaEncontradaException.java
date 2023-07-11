package com.neoris.test.excepciones;

public class CuentaEncontradaException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CuentaEncontradaException() {
		super("El numero de cuenta ya existe!");
		// TODO Auto-generated constructor stub
	}

	public CuentaEncontradaException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}	
	
}
