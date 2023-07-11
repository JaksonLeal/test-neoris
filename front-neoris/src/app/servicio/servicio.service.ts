import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) {}

  private Url = 'http://localhost:8080/clientes/';
  //`
  getListClientes() {
    return this.http.get<any[]>(this.Url+'listar');
  }
}
