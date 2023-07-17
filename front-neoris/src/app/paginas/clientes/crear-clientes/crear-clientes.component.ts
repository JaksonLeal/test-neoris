import { Component } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent {

  public cliente: any;

  constructor(private clienteServ: ClienteService) {
    this.cliente = {
      "contra": "",
      "estado": 0,
      "persona": {
        "identificacion": "",
        "nombre": "",
        "edad": "",
        "genero": "",
        "direccion": "",
        "telefono": ""
      }
    };
  }

  ngOnInit(): void {
  }

  enviar() {
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
