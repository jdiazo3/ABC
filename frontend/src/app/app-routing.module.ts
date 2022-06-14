import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'formregistro', loadChildren: () => import('./pages/form-registro/form-registro.module').then(m => m.FormRegistroModule) },
  { path: 'listar', loadChildren: () => import('./pages/listar/listar.module').then(m => m.ListarModule) },
  { path: 'edit', loadChildren: () => import('./pages/fomr-editar/fomr-editar.module').then(m => m.FomrEditarModule) },
  { path: 'buscar', loadChildren: () => import('./pages/buscar/buscar.module').then(m => m.BuscarModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
