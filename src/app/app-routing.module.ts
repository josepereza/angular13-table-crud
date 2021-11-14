import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {path: '', component: ListadoComponent},
  //{path: 'add', component: AddEditEmpleadoComponent},
  {path: 'edit/:id', component: AddEditEmpleadoComponent},
  {path: 'add', component: AddEditEmpleadoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }