import { Injectable } from '@angular/core';
import { Maestro } from './maestro';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaestroService {

  API_ENDPOINT = "http://localhost:8000/api";

  constructor(private httpClient: HttpClient) { }

  getMaestro(): Observable<Maestro[]> {
    return this.httpClient.get<Maestro[]>(this.API_ENDPOINT + '/maestro')
      .pipe(
        catchError(this.manejarError)
      )
  }

  save(maestro: Maestro) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT + '/maestro', maestro, { headers: headers })
      .pipe(
        catchError(this.manejarError)
      )
  }

  find(id: any): Observable<Maestro> {
    return this.httpClient.get<Maestro>(this.API_ENDPOINT + '/maestro/' + id)
      .pipe(
        catchError(this.manejarError)
      )
  }

  update(maestro: Maestro) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.API_ENDPOINT + '/maestro/' + maestro.id, maestro, { headers: headers })
      .pipe(
        catchError(this.manejarError)
      )
  }

  delete(maestro: Maestro) {
    return this.httpClient.delete(this.API_ENDPOINT + '/maestro/' + maestro.id)
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
