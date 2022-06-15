import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListarRoutingModule } from './listar-routing.module';
import { ListarComponent } from './listar.component';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    ListarRoutingModule,
    FormsModule
  ]
})
export class ListarModule { }
