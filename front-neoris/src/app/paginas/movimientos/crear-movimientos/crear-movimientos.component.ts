import { Component } from '@angular/core';
import { MovimientoService } from 'src/app/servicios/movimiento/movimiento.service';

@Component({
  selector: 'app-crear-movimientos',
  templateUrl: './crear-movimientos.component.html',
  styleUrls: ['./crear-movimientos.component.css']
})
export class CrearMovimientosComponent {

  movimiento = {
    "fecha": "",
    "tipoMovimiento": "",
    "valor": 0,
    "saldo": 0,
    "cuenta": {
      "numCuenta": ""
    }
  }
  constructor(private movimientoServ: MovimientoService) { }

  ngOnInit(): void {
  }

  enviar() {
    this.movimientoServ.guardarMovimientos(this.movimiento).subscribe(respuesta => {
      console.log(respuesta);
    });
    alert("se creo la cuenta con exito");
  }

}
