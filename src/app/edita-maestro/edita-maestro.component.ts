import { Component, OnInit, ViewChild } from '@angular/core';
import { Maestro } from './../maestro';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cfrb-edita-maestro',
  templateUrl: './edita-maestro.component.html',
  styleUrls: ['./edita-maestro.component.css']
})
export class EditaMaestroComponent implements OnInit {

  titulo: string = 'Edita maestro';
  model: Maestro = {};
  maestros!: Maestro[];
  mensajeError!: string;

  @ViewChild('formAdd', { static: false })
  form!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  fnGuardar(){
    console.log('guardar', this.form);
    if(this.form.valid){
      //Enviar el modelo a un servicio
      console.log('modelo', this.model);
      this.form.reset();
    }
  }

}
