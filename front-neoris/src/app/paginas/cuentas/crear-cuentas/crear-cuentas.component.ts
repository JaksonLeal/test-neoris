import { Component } from '@angular/core';
import { CuentaService } from 'src/app/servicios/cuenta/cuenta.service';

@Component({
  selector: 'app-crear-cuentas',
  templateUrl: './crear-cuentas.component.html',
  styleUrls: ['./crear-cuentas.component.css']
})
export class CrearCuentasComponent {

  cuenta = {
    "numCuenta": "",
    "tipoCuenta": "",
    "saldoInicial": 0,
    "estado": 0,
    "cliente": {
      "clienteID": 0,
      "contra": ""
    }
  };

  constructor(private cuentaServ: CuentaService) { }

  ngOnInit(): void {
  }

  enviar() {
    this.cuentaServ.guardarCuenta(this.cuenta).subscribe(
      {
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
