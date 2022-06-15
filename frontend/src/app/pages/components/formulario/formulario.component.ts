import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proveedor } from '../../interface/proveedor.interface';
import { ProveedorserviceService } from '../../services/proveedorservice.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  proveedor: proveedor = new proveedor;
  constructor(
    private ProveedorserviceService : ProveedorserviceService,
    private router:Router
    ) { 

    }

  ngOnInit(): void {
    this.editar();
  }
  
    editar(){
      let documento_pro = localStorage.getItem("documento_pro");
      console.log(documento_pro);
      this.ProveedorserviceService.getProveedoresId(Number(documento_pro))
      .subscribe(data=>{
        this.proveedor=data;
      })
    }
  

  Guardar(){
    this.ProveedorserviceService.createProveedor(this.proveedor)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);
      localStorage.removeItem('documento_pro');
    })
  }
}
