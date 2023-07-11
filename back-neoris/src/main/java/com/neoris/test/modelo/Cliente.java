package com.neoris.test.modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "cliente")
public class Cliente {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long clienteID;
	
	private String contra;
	
	private int estado;
	
	@JsonIgnore
	@OneToOne(mappedBy = "cliente", cascade = CascadeType.ALL)
	private Cuenta cuenta;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "persona_id", referencedColumnName = "identificacion")
	private Persona persona;

	public Cliente() {
		super();
	}

	public Cliente(Long clienteID, String contra, int estado, Cuenta cuenta, Persona persona) {
		super();
		this.clienteID = clienteID;
		this.contra = contra;
		this.estado = estado;
		this.cuenta = cuenta;
		this.persona = persona;
	}

	public Long getClienteID() {
		return clienteID;
	}

	public void setClienteID(Long clienteID) {
		this.clienteID = clienteID;
	}

	public String getContra() {
		return contra;
	}

	public void setContra(String contra) {
		this.contra = contra;
	}

	public int getEstado() {
		return estado;
	}

	public void setEstado(int estado) {
		this.estado = estado;
	}

	public Cuenta getCuenta() {
		return cuenta;
	}

	public void setCuenta(Cuenta cuenta) {
		this.cuenta = cuenta;
	}

	public Persona getPersona() {
		return persona;
	}

	public void setPersona(Persona persona) {
		this.persona = persona;
	}

	@Override
	public String toString() {
		return "Cliente [clienteID=" + clienteID + ", contra=" + contra + ", estado=" + estado + ", persona=" + persona
				+ "]";
	}

	
	
	
}
