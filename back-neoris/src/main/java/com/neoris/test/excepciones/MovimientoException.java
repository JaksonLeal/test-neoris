package com.neoris.test.excepciones;

public class MovimientoException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public MovimientoException() {
		super("No se pudo realizar el movimiento");
		// TODO Auto-generated constructor stub
	}

	public MovimientoException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

}
