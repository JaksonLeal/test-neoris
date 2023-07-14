import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http:HttpClient) { }
  private Url = 'http://localhost:8080/cuentas';
  //`
  getListCuentas(){
    return this.http.get<any>(`${this.Url}/listar`);
  }

  eliminarCuenta(numCuenta:any){
    return this.http.delete<any>(`${this.Url}/${numCuenta}`);
  }

  editarCuenta(cuenta:any){
    return this.http.put<any>(`${this.Url}/actualizar`, cuenta);
  }
  
  obtenerCuenta(numCuenta:any){
    return this.http.get<any>(`${this.Url}/${numCuenta}`);
  }

  guardarCuenta(cuenta:any){
    return this.http.post<any>(`${this.Url}/guardar`, cuenta);
  }
  
}
