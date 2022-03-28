import { Component, OnInit, ViewChild } from '@angular/core';
import { Maestro } from './../maestro';
import { FormControl } from '@angular/forms';
import { MaestroService } from '../maestro.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  id: any;
  edicion: boolean = false;

  @ViewChild('formAdd', { static: false })
  form!: FormControl;

  constructor(private maestroService: MaestroService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.fnBuscarMaestro();
  }

  fnGuardar() {
    console.log('guardar', this.form);
    if (this.form.valid) {
      this.maestroService.update(this.model).subscribe((model) => {
        alert('Maestro actualizado correctamente.');
        this.form.reset();
        this.router.navigate([`maestros`]);
      });
    }
  }

  fnBuscarMaestro() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.edicion = true;
      this.maestroService.find(this.id).subscribe((data: Maestro) => {
        this.model = data;
        console.log(this.model);
      });
    } else {
      this.edicion = false;
    }
  }
}
