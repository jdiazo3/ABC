import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { proveedores } from '../interface/proveedores.interface';
import { catchError, Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorserviceService {

  apiUrl = 'http://localhost:8090/api/proveedores';

  constructor(private http: HttpClient) { }

  getProveedores() {
    return this.http.get<proveedores[]>(this.apiUrl).pipe(catchError(this.errorproveedor));
 }

 createProveedor(proveedores:proveedores){
  return this.http.post<proveedores>(this.apiUrl,proveedores).pipe(catchError(this.errorproveedor));
 }
 eliminarProveedor(documento_pro:number){
  return this.http.delete<proveedores>(this.apiUrl+"/"+documento_pro).pipe(catchError(this.errorproveedor));
 }
 eliminarProveedorc(proveedores:proveedores){
  return this.http.delete<proveedores>(this.apiUrl+"/"+proveedores.documento_pro).pipe(catchError(this.errorproveedor));
 }

 getProveedoresId(documento_pro:number) {
  return this.http.get<proveedores>(this.apiUrl+"/"+documento_pro).pipe(catchError(this.errorproveedor));
}
getProveedoresNombre(nombre:String) {
  return this.http.get<proveedores>(this.apiUrl+"/nam/"+nombre).pipe(catchError(this.errorproveedor));
}

Updateproveedor(proveedores:proveedores){
  return this.http.put<proveedores>(this.apiUrl+"/"+proveedores.documento_pro,proveedores).pipe(catchError(this.errorproveedor));
}

errorproveedor(error:HttpErrorResponse){
return throwError(error.message)
}
}
