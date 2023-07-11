import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent {

  clientes: any[];


  ngOnInit(): void {
    alert(12)
  }

  Eliminar(cliente: any) {
  }

  Editar(cliente: any) {
  }
  Rol(rol: number) {
    let aux;
    return aux;
  }

}
