import { Component } from '@angular/core';
import { Cuenta } from '../../../modelo/Cuenta';
import { CuentaService } from '../../../servicios/cuenta/cuenta.service';

@Component({
  selector: 'app-crear-cuentas',
  templateUrl: './crear-cuentas.component.html',
  styleUrls: ['./crear-cuentas.component.css']
})
export class CrearCuentasComponent {

  cuenta: Cuenta;

  constructor(private cuentaServ: CuentaService) {
    this.cuenta = new Cuenta();
  }

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
