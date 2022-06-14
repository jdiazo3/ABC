import { Component, OnInit } from '@angular/core';
import { ProveedorserviceService } from '../services/proveedorservice.service';
import { Router } from '@angular/router';
import { proveedor } from '../interface/proveedor.interface';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
  proveedor: proveedor = new proveedor;

  constructor(
    private ProveedorserviceService : ProveedorserviceService,
    private router:Router
    ) {
    }

  ngOnInit(): void {

  }

  

  Guardar(){
    this.ProveedorserviceService.createProveedor(this.proveedor)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
