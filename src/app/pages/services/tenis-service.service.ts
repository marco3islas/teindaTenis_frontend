import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Tenis } from '../interfaces/tenis';
import { environment } from '../../../environments/environments.prod';

@Injectable({
  providedIn: 'root',
})
export class TenisService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTenis(): Observable<Tenis[]> {
    return this.http.get<Tenis[]>(`${this.apiUrl}/productos`);
  }

  getTenisDetail(id: Number): Observable<Tenis | undefined> {
    return this.http.get<Tenis>(`${this.apiUrl}/productos/${id}`)
      .pipe(
        catchError(error => {
          console.error('Error en los detalles del tenis', error);
          return of(undefined);
        })
      )
  }
}
