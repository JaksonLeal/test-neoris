import { Component } from '@angular/core';
import { Cliente } from 'src/app/modelo/Cliente';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';

@Component({
  selector: 'app-buscar-clientes',
  templateUrl: './buscar-clientes.component.html',
  styleUrls: ['./buscar-clientes.component.css']
})
export class BuscarClientesComponent {

  cliente: Cliente;
  auxBuscar: boolean;
  auxEditar: boolean;
  constructor(private clienteServ: ClienteService) {
    this.cliente = new Cliente();
    this.auxBuscar = false;
    this.auxEditar = false;
  }

  buscar(clienteID: number) {
    if (!this.auxBuscar) {
      this.clienteServ.obtenerCliente(clienteID).subscribe({
        next: (respuesta) => {
          this.cliente = respuesta;
        },
        error: (error) => {
          alert(error.error.text);
        },
        complete: () => {
          console.log("exitoso");
        }
      });
      this.auxBuscar = true;
    } else {
      this.auxBuscar = false;
    }

  }

  Eliminar(cliente: Cliente) {
    let pregunta = "¿Esta seguro que desea eliminar el usuario con cedula " + cliente.persona.identificacion + "?";
    let verificar = confirm(pregunta);
    if (verificar) {
      this.clienteServ.eliminarCliente(cliente.clienteID).subscribe({
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
      }
      );

    }
  }

  Editar(cliente: Cliente) {
    if (!this.auxEditar) {
      this.clienteServ.obtenerCliente(cliente.clienteID).subscribe({
        next: (respuesta) => {
          this.cliente = respuesta;
        },
        error: (error) => {
          alert(error.error.text)
        },
        complete: () => {
          console.log("exitoso")
        }
      });
      this.auxEditar = true;
    } else {
      this.auxEditar = false;
    }
  }

  enviar() {
    this.clienteServ.editarCliente(this.cliente).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
      },
      error: (error) => {
        alert(error.error.text)
      },
      complete: () => {
        console.log("exitoso")
      }
    });
    this.auxEditar = false;
    this.auxBuscar = false;
  }

}
