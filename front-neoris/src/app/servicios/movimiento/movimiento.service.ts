import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimiento } from 'src/app/modelo/Movimiento';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  constructor(private http: HttpClient) { }
  public Url = 'http://localhost:8080/movimientos';
  //`
  getListMovimientos() {
    return this.http.get<any>(`${this.Url}/listar`);
  }

  buscarPorFechaNombre(fecha: any, nombre: String) {
    return this.http.get<Movimiento>(`${this.Url}/buscarPorFeNom/${fecha}/${nombre}`);
  }

  guardarMovimientos(movimiento: Movimiento) {
    return this.http.post<Movimiento>(`${this.Url}/guardar`, movimiento);
  }
}
