import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscarRoutingModule } from './buscar-routing.module';
import { BuscarComponent } from './buscar.component';


@NgModule({
  declarations: [
    BuscarComponent
  ],
  imports: [
    CommonModule,
    BuscarRoutingModule,
    FormsModule
  ]
})
export class BuscarModule { }
