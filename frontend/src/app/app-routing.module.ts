import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'formregistro', loadChildren: () => import('./pages/form-registro/form-registro.module').then(m => m.FormRegistroModule) },
  { path: 'listar', loadChildren: () => import('./pages/listar/listar.module').then(m => m.ListarModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
