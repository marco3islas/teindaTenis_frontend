import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Tenis } from '../interfaces/tenis';

@Injectable({
  providedIn: 'root',
})
export class TenisService {
  private apiUrl = 'http://localhost:5500';

  constructor(private http: HttpClient) {}

  getTenis(): Observable<Tenis[]> {
    return this.http.get<Tenis[]>(`${this.apiUrl}/productos`);
  }

  getTenisDetail(id: Number): Observable<Tenis | undefined> {
    return this.http.get<Tenis>(`${this.apiUrl}/productos/${id}`)
      .pipe(
        catchError( error => of(undefined) )
      )
  }
}
