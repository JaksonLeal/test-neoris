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

  buscar(clienteID: number) {
    if (!this.auxBuscar) {
      this.clienteServ.obtenerCliente(clienteID).subscribe({
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
      this.auxBuscar = true;
    } else {
      this.auxBuscar = false;
    }

  }

  Eliminar(cliente: any) {
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

  Editar(cliente: any) {
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
