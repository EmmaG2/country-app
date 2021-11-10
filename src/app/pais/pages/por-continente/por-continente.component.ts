import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../inferfaces/pais.interface';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styles: [
  ]
})
export class PorContinenteComponent {

  continentes:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania' ];
  continenteActivo:string = '';

  termino:string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor( private paisService:PaisService ) { }

  activarContinente( continente:string ) {

    if ( continente === this.continenteActivo ) { return; }

    this.continenteActivo = continente;
    this.paises = [];

    this.hayError = false;
    this.termino = continente;

    this.paisService.buscarContinente(this.termino).subscribe(
        (continente) => {
            this.paises = continente;
        },
        (err) => {
            this.hayError = true;
            this.paises = [];
        }
    );
  };

  getClassCss ( continente:string ):string {
    return continente === this.continenteActivo
        ? 'btn btn-primary btn-sm m-1'
        : 'btn btn-outline-primary btn-sm m-1';
  };   
};
