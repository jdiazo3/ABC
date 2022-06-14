import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FomrEditarComponent } from './fomr-editar.component';

const routes: Routes = [{ path: '', component: FomrEditarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FomrEditarRoutingModule { }
