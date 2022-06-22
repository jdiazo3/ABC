import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proveedor } from '../interface/proveedor.interface';
import { proveedores } from '../interface/proveedores.interface';
import { ProveedorserviceService } from '../services/proveedorservice.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

 documento_pro!:number;
 nombre!:String;

 user!: String;
 buscadornom!:String;
 buscadordoc!:String;
 formdoc!:String;
 formnom!:String;
 proveedordata: any[] = [];
 proveedor: proveedor = new proveedor;
 errorMessage = ""
  
  constructor(private ProveedorserviceService : ProveedorserviceService,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.buscadornom="j"
    this.buscadordoc="j"
    }

    Buscar(documento_pro:number){
      this.ProveedorserviceService.getProveedoresId(documento_pro).subscribe(data=>{this.proveedor=data; this.proveedordata=[this.proveedor]
        this.user="h";
        this.documento_pro=0},
        error=> {this.errorMessage = error; alert("El proveedor no se encuentra registrado")})
    }
    BuscarNombre(nombre:String){
      this.ProveedorserviceService.getProveedoresNombre(nombre).subscribe(data=>{this.proveedor=data; this.proveedordata=[this.proveedor]
        console.log(data);
        this.user="h";
        this.nombre=""},
        error=> {this.errorMessage = error; alert("El proveedor no se encuentra registrado")})
    }
    
    
      Editar(proveedores:proveedores){
        localStorage.setItem("documento_pro",proveedores.documento_pro.toString());
        this.router.navigate(["/formregistro"]);
    }
    
    Eliminar(documento_pro:number){
      this.ProveedorserviceService.eliminarProveedor(documento_pro)
      .subscribe(date=>{
        alert("usuario eliminado...");
      })
    }
    bdoc(){
      this.buscadordoc=""
      this.formdoc="g"
      this.formnom=""
      this.buscadornom="h"
      this.user=""
    }
    bnom(){
      this.buscadornom=""
      this.formnom="g"
      this.formdoc=""
      this.buscadordoc="h"
      this.user=""
    }
    
}
