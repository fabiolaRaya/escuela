import { EditaClaseComponent } from './edita-clase/edita-clase.component';
import { AgregarClaseComponent } from './agregar-clase/agregar-clase.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaestrosComponent } from './maestros/maestros.component';
import { EditaMaestroComponent } from './edita-maestro/edita-maestro.component';
import { AgregarMaestroComponent } from './agregar-maestro/agregar-maestro.component';
import { HomeComponent } from './home/home.component';
import { ClasesComponent } from './clases/clases.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'maestros',
    component: MaestrosComponent
  },
  {
    path: 'maestro/edit/:id',
    component: EditaMaestroComponent
  },
  {
    path: 'maestro/add',
    component: AgregarMaestroComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'clases',
    component: ClasesComponent
  },
  {
    path: 'clase/edit/:id',
    component: EditaClaseComponent
  },
  {
    path: 'clase/add',
    component: AgregarClaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
