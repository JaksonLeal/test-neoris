import { Component } from '@angular/core';
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
    this.clienteServ.getListClientes().subscribe({
      next: (respuesta) => {
        this.clientes = respuesta;
      },
      error: (error) => {
        alert(error.error.text)
      },
      complete: () => {
        console.log("exitoso")
      }
    });
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
          alert(error.error.text);
        },
        complete: () => {
          console.log("exitoso");
        }
      });
      this.clientes = this.clientes.filter(u => u !== cliente);
    }
  }

  Editar(cliente: any) {
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
    window.location.reload();
    this.auxEditar = false;
  }

}
