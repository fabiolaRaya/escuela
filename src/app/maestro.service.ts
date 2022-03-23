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

  save(maestro: Maestro){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/maestro', maestro, {headers: headers});
  }

  manejarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Error de cliente: ', error.error.message);
    } else {
      console.log('Error Status: ', error.status);
      console.log('Error: ', error.error);
    }
    return throwError('Hubo un error al obtener los datos. Intente más tarde.')
  }
}
