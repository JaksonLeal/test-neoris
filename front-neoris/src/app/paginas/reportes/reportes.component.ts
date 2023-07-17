import { Component } from '@angular/core';
import { MovimientoService } from 'src/app/servicios/movimiento/movimiento.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {

  auxFecha: Date;
  movimientos: any[];
  auxBuscar: boolean = false;
  constructor(private movimientoServ: MovimientoService) {
  }

  ngOnInit(): void {
  }

  buscar(fecha: any, nombre: String) {

    this.auxFecha = new Date(fecha);
    fecha = this.auxFecha.getFullYear().toString() + "-" + (this.auxFecha.getMonth() + 1).toString() + "-" + (this.auxFecha.getDate() + 1).toString();
    if (!this.auxBuscar) {
      alert(fecha + "-" + nombre);
      this.movimientoServ.buscarPorFechaNombre(fecha, nombre).subscribe({
        next: (respuesta) => {
          this.movimientos = respuesta;
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

}
