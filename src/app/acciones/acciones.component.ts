import { Router } from '@angular/router';
import { MaestroService } from './../maestro.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Maestro } from '../maestro';


@Component({
  selector: 'cfrb-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {

  @Input()
  maestro!: Maestro;

  @Output()
  edit: EventEmitter<Maestro> = new EventEmitter<Maestro>();

  @Output()
  delete: EventEmitter<Maestro> = new EventEmitter<Maestro>();

  constructor(private maestroService: MaestroService, private router: Router) { }

  ngOnInit(): void {
  }

  editarMaestro(maestro: Maestro) {
    console.log('Edit: ', maestro);
    this.edit.emit(maestro);
  }

  eliminarMaestro(maestro: Maestro) {
    if (confirm('¿Desea eliminar este registro?')) {
      this.maestroService.delete(maestro)
        .subscribe((data) => {
          alert('Registro eliminado con éxito');
          window.location.reload();
        }, (error) => {
          alert(error);
        });
    }
  }
}
