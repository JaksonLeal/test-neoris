package com.neoris.test.modelo;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "movimientos")
public class Movimientos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ID;

	private Date fecha;

	private String tipoMovimiento;

	private Long valor;

	private Long saldo;

	@ManyToOne(fetch = FetchType.EAGER)
	private Cuenta cuenta;

	public Movimientos() {
		super();
	}

	public Movimientos(Long iD, Date fecha, String tipoMovimiento, Long valor, Long saldo, Cuenta cuenta) {
		super();
		ID = iD;
		this.fecha = fecha;
		this.tipoMovimiento = tipoMovimiento;
		this.valor = valor;
		this.saldo = saldo;
		this.cuenta = cuenta;
	}

	public Long getID() {
		return ID;
	}

	public void setID(Long iD) {
		ID = iD;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getTipoMovimiento() {
		return tipoMovimiento;
	}

	public void setTipoMovimiento(String tipoMovimiento) {
		this.tipoMovimiento = tipoMovimiento;
	}

	public Long getValor() {
		return valor;
	}

	public void setValor(Long valor) {
		this.valor = valor;
	}

	public Long getSaldo() {
		return saldo;
	}

	public void setSaldo(Long saldo) {
		this.saldo = saldo;
	}

	public Cuenta getCuenta() {
		return cuenta;
	}

	public void setCuenta(Cuenta cuenta) {
		this.cuenta = cuenta;
	}

	@Override
	public String toString() {
		return "Movimientos [ID=" + ID + ", fecha=" + fecha + ", tipoMovimiento=" + tipoMovimiento + ", valor=" + valor
				+ ", saldo=" + saldo + ", cuenta=" + cuenta + "]";
	}

}
