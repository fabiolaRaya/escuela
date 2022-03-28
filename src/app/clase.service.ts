import { Injectable } from '@angular/core';
import { Clase } from './clase';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  API_ENDPOINT = "http://localhost:8000/api";

  constructor(private httpClient: HttpClient) { }

  getClase(): Observable<Clase[]> {
    return this.httpClient.get<Clase[]>(this.API_ENDPOINT + '/clase')
      .pipe(
        catchError(this.manejarError)
      )
  }

  save(clase: Clase) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT + '/clase', clase, { headers: headers })
      .pipe(
        catchError(this.manejarError)
      )
  }
  
  find(id: any): Observable<Clase> {
    return this.httpClient.get<Clase>(this.API_ENDPOINT + '/clase/' + id)
      .pipe(
        catchError(this.manejarError)
      )
  }

  update(clase: Clase) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.API_ENDPOINT + '/clase/' + clase.id, clase, { headers: headers })
      .pipe(
        catchError(this.manejarError)
      )
  }

  delete(clase: Clase) {
    return this.httpClient.delete(this.API_ENDPOINT + '/clase/' + clase.id)
      .pipe(
        catchError(this.manejarError)
      )
  }

  manejarError(error: HttpErrorResponse) {
    let mensajeError = '';
    if (error.error instanceof ErrorEvent) {
      mensajeError = error.error.message;
    } else {
      mensajeError = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    return throwError(mensajeError);
  }
}
