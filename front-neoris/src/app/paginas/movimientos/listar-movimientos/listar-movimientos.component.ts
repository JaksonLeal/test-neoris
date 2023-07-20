import { Component } from '@angular/core';
import { Movimiento } from 'src/app/modelo/Movimiento';
import { MovimientoService } from 'src/app/servicios/movimiento/movimiento.service';

@Component({
  selector: 'app-listar-movimientos',
  templateUrl: './listar-movimientos.component.html',
  styleUrls: ['./listar-movimientos.component.css']
})
export class ListarMovimientosComponent {

  movimientos: Movimiento[];
  constructor(private movimientoServ: MovimientoService) {
    this.movimientos = [new Movimiento()]
  }

  ngOnInit(): void {
    this.movimientoServ.getListMovimientos().subscribe({
      next: (respuesta) => {
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
  }

}
