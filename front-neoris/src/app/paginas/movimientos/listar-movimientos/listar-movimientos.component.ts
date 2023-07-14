import { Component } from '@angular/core';
import { MovimientoService } from 'src/app/servicios/movimiento/movimiento.service';

@Component({
  selector: 'app-listar-movimientos',
  templateUrl: './listar-movimientos.component.html',
  styleUrls: ['./listar-movimientos.component.css']
})
export class ListarMovimientosComponent {

  movimientos: any[];
  constructor(private movimientoServ: MovimientoService) { }

  ngOnInit(): void {
    this.movimientoServ.getListMovimientos().subscribe((respuesta: any) => {
      this.movimientos = respuesta;
      console.log(this.movimientos);
    });
  }

}
