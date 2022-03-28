import { Component, OnInit } from '@angular/core';
import { Clase } from '../clase';
import { ClaseService } from '../clase.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Component({
  selector: 'cfrb-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  titulo: string = 'Clases';
  clases!: Clase[];
  mensajeError!: string;

  constructor(private claseService: ClaseService, private router: Router) { }

  ngOnInit(): void {
    this.getClase();
  }

  onEditClase(clase: Clase) {
    console.log('[Clases]: edit, ', clase);
    this.router.navigate([`clase/edit/${clase.id}`]);
  }

  onDeleteClase(clase: Clase) {
    console.log('[Clases]: delete, ', clase);
    this.clases = this.clases.filter((c: Clase) => {
      return c.id !== clase.id;
    })
  }

  getClase() {
    this.claseService.getClase()
      .pipe(
        tap(clases => console.log('Clases', clases)),
        catchError(error => {
          this.mensajeError = error;
          return EMPTY;
        })
      )
      .subscribe((clases: Clase[]) => this.clases = clases);
  }
}
