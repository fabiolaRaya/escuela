import { MaestroService } from './../maestro.service';
import { Router } from '@angular/router';
import { ClaseService } from './../clase.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Clase } from '../clase';

@Component({
  selector: 'cfrb-acciones-clase',
  templateUrl: './acciones-clase.component.html',
  styleUrls: ['./acciones-clase.component.css']
})
export class AccionesClaseComponent implements OnInit {

  @Input()
  clase!: Clase;

  @Output()
  edit: EventEmitter<Clase> = new EventEmitter<Clase>();

  @Output()
  delete: EventEmitter<Clase> = new EventEmitter<Clase>();

  constructor(private claseService: ClaseService, private router: Router) { }

  ngOnInit(): void {
  }

  editarClase(clase: Clase) {
    console.log('Edit: ', clase);
    this.edit.emit(clase);
  }

  eliminarClase(clase: Clase) {
    if (confirm('¿Desea eliminar este registro?')) {
      this.claseService.delete(clase)
        .subscribe((data) => {
          alert('Registro eliminado con éxito');
          window.location.reload();
        }, (error) => {
          alert(error);
        });
    }
  }

}
