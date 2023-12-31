import { Component } from '@angular/core';
import { BuscarClientesComponent } from './buscar-clientes/buscar-clientes.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  public pantallas: any;
  public pantallaActual: string;

  constructor() {
    // se crea para que el se oculten y se muestren los dashboard
    this.pantallas = [
      { "pantalla": "buscarCliente", "mostrar": true },
      { "pantalla": "crearCliente", "mostrar": false },
      { "pantalla": "listarClientes", "mostrar": false }];
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
