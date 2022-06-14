import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorserviceService } from '../services/proveedorservice.service';
import { proveedor } from '../interface/proveedor.interface';

@Component({
  selector: 'app-fomr-editar',
  templateUrl: './fomr-editar.component.html',
  styleUrls: ['./fomr-editar.component.css']
})
export class FomrEditarComponent implements OnInit {

  proveedor: proveedor = new proveedor;

  constructor(private ProveedorserviceService : ProveedorserviceService,
    private router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let documento_pro = localStorage.getItem("documento_pro");
    console.log(documento_pro);
    this.ProveedorserviceService.getProveedoresId(Number(documento_pro))
    .subscribe(data=>{
      this.proveedor=data;
    })
  }

  Actualizar(proveedor:proveedor){
    this.ProveedorserviceService.Updateproveedor(proveedor)
    .subscribe(data =>{
      this.proveedor=data;
      alert("Se Edito tu registro");
      this.router.navigate(["/listar"]);
    })
  }
}
