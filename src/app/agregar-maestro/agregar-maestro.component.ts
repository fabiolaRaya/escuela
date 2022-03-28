import { Component, OnInit, ViewChild } from '@angular/core';
import { Maestro } from './../maestro';
import { FormControl } from '@angular/forms';
import { MaestroService } from '../maestro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cfrb-agregar-maestro',
  templateUrl: './agregar-maestro.component.html',
  styleUrls: ['./agregar-maestro.component.css']
})
export class AgregarMaestroComponent implements OnInit {

  titulo: string = 'Nuevo maestro';
  model: Maestro = {};

  @ViewChild('formAdd', { static: false })
  form!: FormControl;

  constructor(private maestroService: MaestroService, private router: Router) { }

  ngOnInit(): void {

  }

  fnAgregarMaestro() {
    console.log('guardar', this.form);
    if (this.form.valid) {
      this.maestroService.save(this.model).subscribe((model) => {
        alert('maestro guardado');
        console.log(this.model);
        this.form.reset();
        this.router.navigate([`maestros`]);
      });
    }
  }
}
