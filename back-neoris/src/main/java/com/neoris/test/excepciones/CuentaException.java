package com.neoris.test.excepciones;

public class CuentaException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CuentaException() {
		super("El número de cuenta ya existe!");
		// TODO Auto-generated constructor stub
	}

	public CuentaException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

}
