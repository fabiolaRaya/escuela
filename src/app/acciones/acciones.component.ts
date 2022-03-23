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

  constructor() { }

  ngOnInit(): void {
  }

  editarMaestro(maestro: Maestro) {
    console.log('Edit: ', maestro);   
    this.edit.emit(maestro); 
  }

  eliminarMaestro(maestro: Maestro) {
    console.log('Eliminar: ', maestro);    
    this.delete.emit(maestro); 
  }
}
