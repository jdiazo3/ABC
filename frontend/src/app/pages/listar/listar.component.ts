import { Component, OnInit } from '@angular/core';
import { ProveedorserviceService } from '../services/proveedorservice.service';
import { proveedores } from '../interface/product.interface';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  proveedores!: proveedores[];
  constructor(private ProveedorserviceService : ProveedorserviceService) { }

  ngOnInit(): void {
    this.ProveedorserviceService.getProveedores()
    .subscribe(data=>{
      this.proveedores=data;
    });
  }
  Editar(proveedores:proveedores){

  }
  Eliminar(proveedores:proveedores){
    this.ProveedorserviceService.eliminarProveedor(proveedores)
    .subscribe(date=>{
      this.proveedores=this.proveedores.filter(p=>p!==proveedores);
      alert("usuario eliminado...");
    })
  }

}
