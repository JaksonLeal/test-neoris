package com.neoris.test.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neoris.test.modelo.Cuenta;

public interface CuentaRepositorio extends JpaRepository<Cuenta, String> {

	public Cuenta findByNumCuenta(String numCuenta);

}
