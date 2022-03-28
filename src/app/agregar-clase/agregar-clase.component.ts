import { tap, catchError } from 'rxjs/operators';
import { MaestroService } from './../maestro.service';
import { Maestro } from './../maestro';
import { ClaseService } from './../clase.service';
import { Clase } from './../clase';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EMPTY, of } from 'rxjs';

@Component({
  selector: 'cfrb-agregar-clase',
  templateUrl: './agregar-clase.component.html',
  styleUrls: ['./agregar-clase.component.css']
})
export class AgregarClaseComponent implements OnInit {

  titulo: string = 'Nueva clase';
  model: Clase = {};
  maestros!: Maestro[];

  @ViewChild('formAdd', { static: false })
  form!: FormControl;

  mensajeError!: string;

  constructor(private claseService: ClaseService, private maestroService: MaestroService, private router: Router) { }

  ngOnInit(): void {
    this.getMaestro();
  }

  fnAgregarClase() {
    console.log('guardar', this.form);
    if (this.form.valid) {
      console.log(this.model);
      this.claseService.save(this.model).subscribe((model) => {
        alert('Clase guardada');
        console.log(this.model);
        this.form.reset();
        this.router.navigate([`clases`]);
      });
    }
  }

  getMaestro() {
    this.maestroService.getMaestro()
      .pipe(
        tap(maestros => console.log('Maestros', maestros)),
        catchError(error => {
          this.mensajeError = error;
          return EMPTY;
        })
      )
      .subscribe((maestros: Maestro[]) => this.maestros = maestros);
  }
}
