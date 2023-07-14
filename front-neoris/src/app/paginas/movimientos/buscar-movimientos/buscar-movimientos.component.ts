import { Component } from '@angular/core';
import { MovimientoService } from 'src/app/servicios/movimiento/movimiento.service';

@Component({
  selector: 'app-buscar-movimientos',
  templateUrl: './buscar-movimientos.component.html',
  styleUrls: ['./buscar-movimientos.component.css']
})
export class BuscarMovimientosComponent {
  auxFecha:Date;
  movimiento: any;
  auxBuscar: boolean = false;
  constructor(private movimientoServ: MovimientoService) {
  }

  ngOnInit(): void {
  }

  buscar(fecha: any, nombre:String) {
    
    this.auxFecha = new Date(fecha);
    fecha = this.auxFecha.getFullYear().toString()+"-"+(this.auxFecha.getMonth()+1).toString()+"-"+(this.auxFecha.getDate()+1).toString();
    if (!this.auxBuscar) {
      alert(fecha + "-" + nombre);
      this.movimientoServ.buscarPorFechaNombre(fecha, nombre).subscribe(respuesta => {
        this.movimiento = respuesta;
      });
      this.auxBuscar = true;
    } else {
      this.auxBuscar = false;
    }
  }

}
