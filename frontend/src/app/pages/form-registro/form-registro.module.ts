import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRegistroRoutingModule } from './form-registro-routing.module';
import { FormRegistroComponent } from './form-registro.component';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormRegistroComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormRegistroRoutingModule,
    FormsModule
  ]
})
export class FormRegistroModule { }
