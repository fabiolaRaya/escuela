import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaestrosComponent } from './maestros/maestros.component';
import { AccionesComponent } from './acciones/acciones.component';
import { EditaMaestroComponent } from './edita-maestro/edita-maestro.component';
import { AgregarMaestroComponent } from './agregar-maestro/agregar-maestro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ClasesComponent } from './clases/clases.component';
import { AccionesClaseComponent } from './acciones-clase/acciones-clase.component';
import { AgregarClaseComponent } from './agregar-clase/agregar-clase.component';
import { EditaClaseComponent } from './edita-clase/edita-clase.component';

@NgModule({
  declarations: [
    AppComponent,
    MaestrosComponent,
    AccionesComponent,
    EditaMaestroComponent,
    AgregarMaestroComponent,
    HomeComponent,
    ClasesComponent,
    AccionesClaseComponent,
    AgregarClaseComponent,
    EditaClaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
