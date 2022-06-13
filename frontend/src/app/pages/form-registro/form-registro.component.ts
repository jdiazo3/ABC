import { Component, OnInit } from '@angular/core';
import { ProveedorserviceService } from '../services/proveedorservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
  

  constructor(
    private ProveedorserviceService : ProveedorserviceService,
    private router:Router
    ) {
    }

  ngOnInit(): void {
  }

  

  Guardar(){
    alert();
    
  }
}
