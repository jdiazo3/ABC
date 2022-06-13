import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { proveedores } from '../interface/product.interface';

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
 eliminarProveedor(proveedores:proveedores){
  return this.http.delete<proveedores>(this.apiUrl+"/"+proveedores.documento_pro);
 }
}
