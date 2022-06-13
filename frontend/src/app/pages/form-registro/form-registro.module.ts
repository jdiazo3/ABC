import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRegistroRoutingModule } from './form-registro-routing.module';
import { FormRegistroComponent } from './form-registro.component';


@NgModule({
  declarations: [
    FormRegistroComponent
  ],
  imports: [
    CommonModule,
    FormRegistroRoutingModule
  ]
})
export class FormRegistroModule { }
