import { Component } from '@angular/core';
import { Cliente } from '../../../modelo/Cliente'
import { ClienteService } from '../../../servicios/cliente/cliente.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent {

  cliente: Cliente;

  constructor(private clienteServ: ClienteService) {
    this.cliente = new Cliente();
  }

  enviar() {
    console.log(this.cliente);
    this.clienteServ.guardarCliente(this.cliente).subscribe({
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
