import { Component } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';

@Component({
  selector: 'app-buscar-clientes',
  templateUrl: './buscar-clientes.component.html',
  styleUrls: ['./buscar-clientes.component.css']
})
export class BuscarClientesComponent {

  cliente: any;
  auxBuscar: boolean = false;
  auxEditar: boolean = false;
  constructor(private clienteServ: ClienteService) {
  }

  ngOnInit(): void {
  }

  buscar(clienteID: number) {
    if (!this.auxBuscar) {
      this.clienteServ.obtenerCliente(clienteID).subscribe(respuesta => {
        this.cliente = respuesta;
      });
      this.auxBuscar = true;
    } else {
      this.auxBuscar = false;
    }

  }

  Eliminar(cliente: any) {
    let pregunta = "¿Esta seguro que desea eliminar el usuario con cedula " + cliente.persona.identificacion + "?";
    let verificar = confirm(pregunta);
    if (verificar) {
      this.clienteServ.eliminarCliente(cliente.clienteID).subscribe();
      alert("cliente eliminado");
      window.location.reload();
    }
  }

  Editar(cliente: any) {
    this.clienteServ.obtenerCliente(cliente.clienteID).subscribe(respuesta => {
      this.cliente = respuesta;
    });
    this.auxEditar = true;
  }

  enviar() {
    this.clienteServ.editarCliente(this.cliente).subscribe(respuesta => {
      alert("se actualizo con exito");
    });
    this.auxEditar = false;
    this.auxBuscar = false;
  }

}
