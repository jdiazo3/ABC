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

 proveedor: proveedor = new proveedor;
 
 proveedores!: proveedores[];
  
  constructor(private ProveedorserviceService : ProveedorserviceService,private router:Router) { 
    
  }

  ngOnInit(): void {
    
    }

    Buscar(documento_pro:number){
    
      this.ProveedorserviceService.getProveedoresId(documento_pro)
      .subscribe(data=>{
        this.proveedor.documento_pro=data.documento_pro;
        this.proveedor.name_pro=data.name_pro;
        this.proveedor.apellido_pro=data.apellido_pro;
        this.proveedor.direccion_pro=data.direccion_pro;
        this.proveedor.email_pro=data.email_pro;
        this.proveedor.vehiculos_pro=data.vehiculos_pro;
      });
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
