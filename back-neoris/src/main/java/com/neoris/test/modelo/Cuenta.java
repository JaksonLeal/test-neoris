package com.neoris.test.modelo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "cuenta")
public class Cuenta {

	@Id
	private String numCuenta;

	private String tipoCuenta;

	private Long saldoInicial;

	private int estado;

	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cliente_id", referencedColumnName = "clienteID")
	private Cliente cliente;

	@JsonIgnore
	@OneToMany(mappedBy = "cuenta", cascade = CascadeType.ALL)
	private List<Movimientos> movimientos;

	public Cuenta() {
		super();
	}

	public Cuenta(String numCuenta, String tipoCuenta, Long saldoInicial, int estado, Cliente cliente,
			List<Movimientos> movimientos) {
		super();
		this.numCuenta = numCuenta;
		this.tipoCuenta = tipoCuenta;
		this.saldoInicial = saldoInicial;
		this.estado = estado;
		this.cliente = cliente;
		this.movimientos = movimientos;
	}

	public String getNumCuenta() {
		return numCuenta;
	}

	public void setNumCuenta(String numCuenta) {
		this.numCuenta = numCuenta;
	}

	public String getTipoCuenta() {
		return tipoCuenta;
	}

	public void setTipoCuenta(String tipoCuenta) {
		this.tipoCuenta = tipoCuenta;
	}

	public Long getSaldoInicial() {
		return saldoInicial;
	}

	public void setSaldoInicial(Long saldoInicial) {
		this.saldoInicial = saldoInicial;
	}

	public int getEstado() {
		return estado;
	}

	public void setEstado(int estado) {
		this.estado = estado;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public List<Movimientos> getMovimientos() {
		return movimientos;
	}

	public void setMovimientos(List<Movimientos> movimientos) {
		this.movimientos = movimientos;
	}

	@Override
	public String toString() {
		return "Cuenta [numCuenta=" + numCuenta + ", tipoCuenta=" + tipoCuenta + ", saldoInicial=" + saldoInicial
				+ ", estado=" + estado + ", cliente=" + cliente + ", movimientos=" + movimientos + "]";
	}

}
