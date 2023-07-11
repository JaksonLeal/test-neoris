package com.neoris.test.excepciones;

public class MovimientoEncontradoException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public MovimientoEncontradoException() {
		super("El Movimiento ya existe");
		// TODO Auto-generated constructor stub
	}

	public MovimientoEncontradoException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	
}
