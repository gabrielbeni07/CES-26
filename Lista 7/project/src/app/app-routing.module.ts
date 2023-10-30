import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'lista', component: ListaComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
