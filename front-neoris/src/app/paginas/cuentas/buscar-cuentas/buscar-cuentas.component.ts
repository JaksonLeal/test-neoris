import { Component } from '@angular/core';
import { CuentaService } from 'src/app/servicios/cuenta/cuenta.service';
import { MovimientoService } from 'src/app/servicios/movimiento/movimiento.service';

@Component({
  selector: 'app-buscar-cuentas',
  templateUrl: './buscar-cuentas.component.html',
  styleUrls: ['./buscar-cuentas.component.css']
})
export class BuscarCuentasComponent {

  cuenta: any;
  auxBuscar: boolean = false;
  auxEditar: boolean = false;
  auxCrearMov: boolean = false;
  movimiento: any;

  constructor(private cuentaServ: CuentaService, private movimientoServ: MovimientoService) {
    this.movimiento = {
      "fecha": "",
      "tipoMovimiento": "",
      "valor": 0,
      "saldo": 0,
      "cuenta": {
        "numCuenta": ""
      }
    };
    this.cuenta = {
      "numCuenta": "",
      "tipoCuenta": "",
      "saldoInicial": 0,
      "estado": 0,
      "cliente": {
        "clienteID": 0,
        "contra": ""
      }
    };
  }

  ngOnInit(): void {
  }

  buscar(numCuenta: any) {
    if (!this.auxBuscar) {
      this.cuentaServ.obtenerCuenta(numCuenta).subscribe({
        next: (respuesta) => {
          this.auxBuscar = true;
          this.cuenta = respuesta;
        },
        error: (error) => {
          alert(error.error.text)
        },
        complete: () => {
          console.log("exitoso")
        }
      });
    } else {
      this.auxBuscar = false;
    }
  }

  Eliminar(cuenta: any) {
    let pregunta = "¿Esta seguro que desea eliminar la cuenta N° " + cuenta.numCuenta + "?";
    let verificar = confirm(pregunta);
    if (verificar) {
      this.cuentaServ.eliminarCuenta(cuenta.numCuenta).subscribe({
        next: (respuesta) => {
          console.log(respuesta);
        },
        error: (error) => {
          let mensaje = error.error.text;
          let verificar = confirm(mensaje);
          verificar ? window.location.reload() : window.location.reload();
        },
        complete: () => {
          console.log("exitoso");
        }
      });
    }
  }

  Editar(cuenta: any) {
    if (!this.auxEditar) {
      this.cuentaServ.obtenerCuenta(cuenta.numCuenta).subscribe({
        next: (respuesta) => {
          this.cuenta = respuesta;
        },
        error: (error) => {
          console.log(error)
          alert(error.error.text)
        },
        complete: () => {
          console.log("exitoso")
        }
      });
      this.auxEditar = true;
    } else {
      this.auxEditar = false;
    }
  }

  enviarCliente() {
    this.cuentaServ.editarCuenta(this.cuenta).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
      },
      error: (error) => {
        alert(error.error.text);
      },
      complete: () => {
        console.log("exitoso");
      }
    });
    this.auxEditar = false;
    this.auxBuscar = false;
  }

  crearMovimiento(cuenta: any) {
    console.log(cuenta);
    this.movimiento.saldo = cuenta.saldoInicial;
    this.movimiento.cuenta.numCuenta = cuenta.numCuenta;
    this.auxCrearMov = true;
  }
  enviarMovimiento() {
    this.movimientoServ.guardarMovimientos(this.movimiento).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
      },
      error: (error) => {
        let mensaje = error.error.text;
        let verificar = confirm(mensaje);
        verificar ? window.location.reload() : window.location.reload();
      },
      complete: () => {
        console.log("exitoso");
      }
    });
    this.auxCrearMov = false;
  }

}
