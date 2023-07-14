import { Component } from '@angular/core';
import { CuentaService } from 'src/app/servicios/cuenta/cuenta.service';

@Component({
  selector: 'app-buscar-cuentas',
  templateUrl: './buscar-cuentas.component.html',
  styleUrls: ['./buscar-cuentas.component.css']
})
export class BuscarCuentasComponent {

  cuenta: any;
  auxBuscar: boolean = false;
  auxEditar: boolean = false;
  constructor(private cuentaServ: CuentaService) {
  }

  ngOnInit(): void {
  }

  buscar(numCuenta: any) {
    if (!this.auxBuscar) {
      this.cuentaServ.obtenerCuenta(numCuenta).subscribe(respuesta => {
        this.cuenta = respuesta;
      });
      this.auxBuscar = true;
    } else {
      this.auxBuscar = false;
    }
  }

  Eliminar(cuenta: any) {
    let pregunta = "¿Esta seguro que desea eliminar la cuenta N° " + cuenta.num_cuenta + "?";
    let verificar = confirm(pregunta);
    if (verificar) {
      this.cuentaServ.eliminarCuenta(cuenta.num_cuenta).subscribe();
      alert("cuenta eliminada");
      window.location.reload();
    }
  }

  Editar(cuenta: any) {
    this.cuentaServ.obtenerCuenta(cuenta.num_cuenta).subscribe(respuesta => {
      this.cuenta = respuesta;
    });
    this.auxEditar = true;
  }

  enviar() {
    this.cuentaServ.editarCuenta(this.cuenta).subscribe(respuesta => {
      alert("se actualizo con exito");
    });
    this.auxEditar = false;
    this.auxBuscar = false;
  }

}
