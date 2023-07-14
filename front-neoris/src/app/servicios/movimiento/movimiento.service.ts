import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  constructor(private http: HttpClient) { }
  private Url = 'http://localhost:8080/movimientos';
  //`
  getListMovimientos() {
    return this.http.get<any>(`${this.Url}/listar`);
  }

  buscarPorFechaNombre(fecha: any, nombre: String) {
    return this.http.get<any>(`${this.Url}/buscarPorFeNom/${fecha}/${nombre}`);
  }

  guardarMovimientos(movimiento: any) {
    return this.http.post<any>(`${this.Url}/guardar`, movimiento);
  }
}
