import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl = 'https://restcountries.com/v3.1';
  private _regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this._baseUrl}/region/${region}?fields=name,cca2`)
  }

  getPaisByCode(code: string): Observable<Country | null> {

    if (!code) {
      return of(null);
    }

    return this.http.get<Country>(`${this._baseUrl}/alpha/${code}?fields=name,cca2,borders`)
  }
}
