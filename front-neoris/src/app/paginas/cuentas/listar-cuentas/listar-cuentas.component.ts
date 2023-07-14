import { Component } from '@angular/core';
import { CuentaService } from 'src/app/servicios/cuenta/cuenta.service';

@Component({
  selector: 'app-listar-cuentas',
  templateUrl: './listar-cuentas.component.html',
  styleUrls: ['./listar-cuentas.component.css']
})
export class ListarCuentasComponent {

  cuentas: any[];
  auxEditar: boolean = false;
  cuenta: any;
  constructor(private cuentaServ: CuentaService) { }

  ngOnInit(): void {
    this.cuentaServ.getListCuentas().subscribe((respuesta: any) => {
      this.cuentas = respuesta;
    });
  }

  Eliminar(cuenta: any) {
    let pregunta = "¿Esta seguro que desea eliminar la ceunta de número " + cuenta.numCuenta + "?";
    let verificar = confirm(pregunta);
    if (verificar) {
      this.cuentaServ.eliminarCuenta(cuenta.numCuenta).subscribe();
      this.cuentas = this.cuentas.filter(u => u !== cuenta);
      alert("cuenta eliminada");
    }
  }

  Editar(cuenta: any) {
    if (!this.auxEditar) {
      this.cuentaServ.obtenerCuenta(cuenta.numCuenta).subscribe(respuesta => {
        this.cuenta = respuesta;
      });
      this.auxEditar = true;
    } else {
      this.auxEditar = false;
    }
  }

  enviar() {
    this.cuentaServ.editarCuenta(this.cuenta).subscribe(respuesta => {
      alert("se actualizo con exito");
      window.location.reload();
    });
    this.auxEditar = false;
  }

}
