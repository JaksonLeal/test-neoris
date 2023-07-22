import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }
  public Url = 'http://localhost:8080/clientes';
  //`
  getListClientes(){
    return this.http.get<Cliente[]>(`${this.Url}/listar`);
  }

  eliminarCliente(clienteId:any){
    return this.http.delete<any>(`${this.Url}/${clienteId}`);
  }

  editarCliente(cliente:any){
    return this.http.put<Cliente>(`${this.Url}/actualizar`, cliente);
  }
  
  obtenerCliente(clienteId:number){
    return this.http.get<Cliente>(`${this.Url}/${clienteId}`);
  }

  guardarCliente(cliente:Cliente){
    return this.http.post<Cliente>(`${this.Url}/guardar`, cliente);
  }

}
