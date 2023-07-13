import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent {

  clientes: any[];
  auxEditar: boolean = false;
  cliente: any;
  
  constructor(private clienteServ: ClienteService) { }

  ngOnInit(): void {
    this.clienteServ.getListClientes().subscribe((respuesta: any) => {
      this.clientes = respuesta;
      //console.log(respuesta[0]);
    });
  }

  Eliminar(cliente: any) {
    let pregunta = "¿Esta seguro que desea eliminar el usuario con cedula " + cliente.persona.identificacion + "?";
    let verificar = confirm(pregunta);

    if (verificar) {
      this.clienteServ.eliminarCliente(cliente.clienteID).subscribe();
      this.clientes = this.clientes.filter(u => u !== cliente);
      alert("cliente eliminado");
    }
  }

  Editar(cliente: any) {
    if (!this.auxEditar) {
      this.clienteServ.obtenerCliente(cliente.clienteID).subscribe(respuesta => {
        //console.log(respuesta);
        this.cliente = respuesta;
      });
      this.auxEditar = true;
    } else {
      this.auxEditar = false;
    }
  }

  enviar() {
    this.clienteServ.editarCliente(this.cliente).subscribe(respuesta => {
      console.log(respuesta);
      alert("se actualizo con exito");
    });
    this.auxEditar = false;
  }

}
