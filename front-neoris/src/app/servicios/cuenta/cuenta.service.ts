import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuenta } from 'src/app/modelo/Cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) { }
  private Url = 'http://localhost:8080/cuentas';
  //`
  getListCuentas() {
    return this.http.get<Cuenta[]>(`${this.Url}/listar`);
  }

  eliminarCuenta(numCuenta: any) {
    return this.http.delete<any>(`${this.Url}/${numCuenta}`);
  }

  editarCuenta(cuenta: Cuenta) {
    return this.http.put<Cuenta>(`${this.Url}/actualizar`, cuenta);
  }

  obtenerCuenta(numCuenta: String) {
    return this.http.get<Cuenta>(`${this.Url}/${numCuenta}`);
  }

  guardarCuenta(cuenta: Cuenta) {
    return this.http.post<Cuenta>(`${this.Url}/guardar`, cuenta);
  }

}
