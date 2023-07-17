import { Component } from '@angular/core';
import { CuentaService } from 'src/app/servicios/cuenta/cuenta.service';
import { MovimientoService } from 'src/app/servicios/movimiento/movimiento.service';

@Component({
  selector: 'app-listar-cuentas',
  templateUrl: './listar-cuentas.component.html',
  styleUrls: ['./listar-cuentas.component.css']
})
export class ListarCuentasComponent {

  cuentas: any[];
  auxEditar: boolean = false;
  cuenta: any;
  movimiento: any;
  auxCrearMov: boolean = false;
  constructor(private cuentaServ: CuentaService, private movimientoServ: MovimientoService) {
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
    this.movimiento = {
      "fecha": "",
      "tipoMovimiento": "",
      "valor": 0,
      "saldo": 0,
      "cuenta": {
        "numCuenta": ""
      }
    };
  }

  ngOnInit(): void {
    this.cuentaServ.getListCuentas().subscribe({
      next: (respuesta) => {
        this.cuentas = respuesta;
      },
      error: (error) => {
        alert(error.error.text)
      },
      complete: () => {
        console.log("exitoso")
      }
    });
  }

  Eliminar(cuenta: any) {
    let pregunta = "¿Esta seguro que desea eliminar la ceunta de número " + cuenta.numCuenta + "?";
    let verificar = confirm(pregunta);
    if (verificar) {
      this.cuentaServ.eliminarCuenta(cuenta.numCuenta).subscribe({
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
      this.cuentas = this.cuentas.filter(u => u !== cuenta);
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

  enviar() {
    this.cuentaServ.editarCuenta(this.cuenta).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
      },
      error: (error) => {
        let mensaje = error.error.text;
        let verificar = confirm(mensaje);
        verificar ? window.location.reload() : window.location.reload();
      },
      complete: () => {
        console.log("exitoso")
      }
    });
    this.auxEditar = false;
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
