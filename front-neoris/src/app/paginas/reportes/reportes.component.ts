import { Component } from '@angular/core';
import { Movimiento } from '../../modelo/Movimiento';
import { MovimientoService } from '../../servicios/movimiento/movimiento.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {

  public auxFecha: Date;
  public movimientos: Movimiento[];
  public auxBuscar: boolean = false;
  public page!: number;
  constructor(private movimientoServ: MovimientoService) {
    this.movimientos = [new Movimiento()];
  }

  ngOnInit(): void {
  }

  buscar(fecha: any, nombre: String) {

    this.auxFecha = new Date(fecha);
    fecha = this.auxFecha.getFullYear().toString() + "-" + (this.auxFecha.getMonth() + 1).toString() + "-" + (this.auxFecha.getDate()).toString();
    if (!this.auxBuscar) {
      this.movimientoServ.buscarPorFechaNombre(fecha, nombre).subscribe({
        next: (respuesta: any) => {
          console.log(respuesta);
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
