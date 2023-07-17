import { Component } from '@angular/core';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent {
  public pantallas: any;
  public pantallaActual: string;

  constructor() {
    // se crea para que el se oculten y se muestren los dashboard
    this.pantallas = [
      { "pantalla": "buscarCuentas", "mostrar": true },
      { "pantalla": "crearCuentas", "mostrar": false },
      { "pantalla": "listarCuentass", "mostrar": false }];
  }
  
  mostrarPantalla(pantalla: any) {
    this.pantallaActual = pantalla;
    this.pantallas.forEach((item: any) => {
      if (item.pantalla == this.pantallaActual) {
        item.mostrar = true;
      } else {
        item.mostrar = false;
      }
    });
  }
}
