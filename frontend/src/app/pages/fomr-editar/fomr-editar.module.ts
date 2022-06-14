import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FomrEditarRoutingModule } from './fomr-editar-routing.module';
import { FomrEditarComponent } from './fomr-editar.component';


@NgModule({
  declarations: [
    FomrEditarComponent
  ],
  imports: [
    CommonModule,
    FomrEditarRoutingModule,
    FormsModule
  ]
})
export class FomrEditarModule { }
