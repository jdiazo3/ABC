import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { proveedores } from '../interface/proveedores.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorserviceService {

  apiUrl = 'http://localhost:8090/api/proveedores';

  constructor(private http: HttpClient) { }

  getProveedores() {
    return this.http.get<proveedores[]>(this.apiUrl);
 }

 createProveedor(proveedores:proveedores){
  return this.http.post<proveedores>(this.apiUrl,proveedores);
 }
 eliminarProveedor(documento_pro:number){
  return this.http.delete<proveedores>(this.apiUrl+"/"+documento_pro);
 }
 eliminarProveedorc(proveedores:proveedores){
  return this.http.delete<proveedores>(this.apiUrl+"/"+proveedores.documento_pro);
 }

 getProveedoresId(documento_pro:number) {
  return this.http.get<proveedores>(this.apiUrl+"/"+documento_pro);
}

Updateproveedor(proveedores:proveedores){
  return this.http.put<proveedores>(this.apiUrl+"/"+proveedores.documento_pro,proveedores);
}
}
