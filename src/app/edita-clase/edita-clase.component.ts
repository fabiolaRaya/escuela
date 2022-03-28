import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Clase } from '../clase';
import { ClaseService } from '../clase.service';
import { Maestro } from '../maestro';
import { MaestroService } from '../maestro.service';

@Component({
  selector: 'cfrb-edita-clase',
  templateUrl: './edita-clase.component.html',
  styleUrls: ['./edita-clase.component.css']
})
export class EditaClaseComponent implements OnInit {

  titulo: string = 'Edita clase';
  model: Clase = {};
  maestros!: Maestro[];
  mensajeError!: string;
  id: any;
  edicion: boolean = false;

  @ViewChild('formAdd', { static: false })
  form!: FormControl;

  constructor(
    private claseService: ClaseService,
    private maestroService: MaestroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fnBuscarClase();
    this.getMaestro();
  }

  fnGuardar() {
    console.log('guardar', this.form);
    if (this.form.valid) {
      this.claseService.update(this.model).subscribe((model) => {
        alert('Clase actualizada correctamente.');
        this.form.reset();
        this.router.navigate([`clases`]);
      });
    }
  }

  fnBuscarClase() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.edicion = true;
      this.claseService.find(this.id).subscribe((data: Clase) => {
        this.model = data;
        console.log(this.model);
      });
    } else {
      this.edicion = false;
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
