import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ResponseApi } from '../Interfaces/response-api';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlApi:string = environment.endpoint + "Producto/"

  constructor(private http:HttpClient){ }

  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`)
  }

  guardar(request:Producto):Observable<ResponseApi>{
  
    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`,request)//request es el usuario que viene desde login

  }

  editar(request:Producto):Observable<ResponseApi>{
  
    return this.http.put<ResponseApi>(`${this.urlApi}Editar`,request)//request es el usuario que viene desde login

  }

  eliminar(id:number):Observable<ResponseApi>{
  
    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`)
    //crea la url que llamada al API en la parte de eliminar 
    //this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`)

  }

}
