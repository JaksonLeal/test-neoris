package com.neoris.test.modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "persona")
public class Persona {

	@Id
	private String identificacion;

	private String nombre;

	private String genero;

	private String edad;

	private String direccion;

	private String telefono;

	@JsonIgnore
	@OneToOne(mappedBy = "persona", cascade = CascadeType.ALL)
	private Cliente cliente;

	public Persona() {
		super();
	}

	public Persona(String identificacion, String nombre, String genero, String edad, String direccion,
			String telefono) {
		super();
		this.identificacion = identificacion;
		this.nombre = nombre;
		this.genero = genero;
		this.edad = edad;
		this.direccion = direccion;
		this.telefono = telefono;
	}

	public String getIdentificacion() {
		return identificacion;
	}

	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getEdad() {
		return edad;
	}

	public void setEdad(String edad) {
		this.edad = edad;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	@Override
	public String toString() {
		return "Persona [identificacion=" + identificacion + ", nombre=" + nombre + ", genero=" + genero + ", edad="
				+ edad + ", direccion=" + direccion + ", telefono=" + telefono + "]";
	}

}
