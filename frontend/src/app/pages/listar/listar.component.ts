import { Component, OnInit } from '@angular/core';
import { ProveedorserviceService } from '../services/proveedorservice.service';
import { proveedores } from '../interface/proveedores.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  proveedores!: proveedores[];
  constructor(private ProveedorserviceService : ProveedorserviceService,private router:Router) { }

  ngOnInit(): void {
    this.ProveedorserviceService.getProveedores()
    .subscribe(data=>{
      this.proveedores=data;
    });
  }
  Editar(proveedores:proveedores){
      localStorage.setItem("documento_pro",proveedores.documento_pro.toString());
      this.router.navigate(["/edit"]);
  }

  Eliminar(proveedores:proveedores){
    this.ProveedorserviceService.eliminarProveedorc(proveedores)
    .subscribe(date=>{
      this.proveedores=this.proveedores.filter(p=>p!==proveedores);
      alert("usuario eliminado...");
    })
  }

}
