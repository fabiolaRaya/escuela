import { Component, OnInit } from '@angular/core';
import { Maestro } from '../maestro';
import { MaestroService } from '../maestro.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Component({
  selector: 'cfrb-maestros',
  templateUrl: './maestros.component.html',
  styleUrls: ['./maestros.component.css']
})
export class MaestrosComponent implements OnInit {

  titulo: string = 'Maestros';
  maestros!: Maestro[];
  mensajeError!: string;

  constructor(private maestroService: MaestroService, private router: Router) { }

  ngOnInit(): void {
    this.getMaestro();
  }

  onEditMaestro(maestro: Maestro) {
    console.log('[Maestros]: edit, ', maestro);
    this.router.navigate([`maestro/edit/${maestro.id}`]);
  }

  onDeleteMaestro(maestro: Maestro) {
    console.log('[Maestros]: delete, ', maestro);  
    this.maestros = this.maestros.filter((m: Maestro) => {
      return m.id !== maestro.id;
    })  
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
