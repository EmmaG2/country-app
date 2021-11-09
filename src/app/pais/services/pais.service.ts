import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../inferfaces/pais.interface';

@Injectable({
    providedIn: 'root',
})
export class PaisService {
    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) {}

    buscarPais(termino: string): Observable<Pais[]> {
        const url = `${this.apiUrl}/name/${termino}?fullText=true'`;
        return this.http.get<Pais[]>(url);
    };

    buscarCapital(termino: string): Observable<Pais[]> {
        const url = `${this.apiUrl}/capital/${termino}`;
        return this.http.get<Pais[]>(url);
    };

    getIdCountry(termino: string): Observable<Pais> {
        const url = `${this.apiUrl}/alpha/${termino}`;
        return this.http.get<Pais>(url);
    };

    buscarContinente(termino: string): Observable<Pais[]> {
        const url = `${this.apiUrl}/region/${termino}`;
        return this.http.get<Pais[]>(url);
    };
};
