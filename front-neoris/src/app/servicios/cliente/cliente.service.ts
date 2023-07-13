import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }
  private Url = 'http://localhost:8080/clientes';
  //`
  getListClientes(){
    return this.http.get<any>(`${this.Url}/listar`);
  }

  eliminarCliente(clienteId:any){
    return this.http.delete<any>(`${this.Url}/${clienteId}`);
  }

  editarCliente(cliente:any){
    return this.http.put<any>(`${this.Url}/actualizar`, cliente);
  }
  
  obtenerCliente(clienteId:any){
    return this.http.get<any>(`${this.Url}/${clienteId}`);
  }

  guardarCliente(cliente:any){
    return this.http.post<any>(`${this.Url}/guardar`, cliente);
  }

}
