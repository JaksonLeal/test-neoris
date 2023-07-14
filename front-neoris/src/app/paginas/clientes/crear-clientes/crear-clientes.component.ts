import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent {

  cliente={
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

  constructor(private clienteServ: ClienteService) { }

  ngOnInit(): void {
  }

  enviar() {
    this.clienteServ.guardarCliente(this.cliente).subscribe(respuesta => {
      alert("se creo el cliente con exito");
    });
  }

}
