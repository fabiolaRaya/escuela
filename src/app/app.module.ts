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

@NgModule({
  declarations: [
    AppComponent,
    MaestrosComponent,
    AccionesComponent,
    EditaMaestroComponent,
    AgregarMaestroComponent,
    HomeComponent
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
