import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proveedor } from '../interface/proveedor.interface';
import { proveedores } from '../interface/proveedores.interface';
import { ProveedorserviceService } from '../services/proveedorservice.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

 documento_pro!:number;

 user!: String;
 proveedordata: any[] = [];
 proveedor: proveedor = new proveedor;
  
  constructor(private ProveedorserviceService : ProveedorserviceService,private router:Router) { 
    
  }

  ngOnInit(): void {
    
    }

    Buscar(documento_pro:number){
      this.ProveedorserviceService.getProveedoresId(documento_pro).subscribe(data=>{
        this.proveedor=data;
        this.proveedordata=[this.proveedor]
        console.log(this.proveedordata);
        this.user="h"
      })
      
    }

    
      Editar(proveedores:proveedores){
        localStorage.setItem("documento_pro",proveedores.documento_pro.toString());
        this.router.navigate(["/edit"]);
    }
    
    Eliminar(documento_pro:number){
      this.ProveedorserviceService.eliminarProveedor(documento_pro)
      .subscribe(date=>{
        alert("usuario eliminado...");
      })
    }
    
}
