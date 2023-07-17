import { Component } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent {

  public pantallas: any;
  public pantallaActual: string;

  constructor() {
    // se crea para que el se oculten y se muestren los dashboard
    this.pantallas = [
      { "pantalla": "listarMovimientos", "mostrar": false }];
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
