import {Component} from '@angular/core';

import {Pais} from '../../inferfaces/pais.interface';
import {PaisService} from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
        .subscribe(
            (pais) => {
              this.paises = pais;
            },
            (err) => {
              this.hayError = true;
              this.paises = [];
            });
  }

  sugerencias(pais: string) {
    this.hayError = false;
    this.termino = pais;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(pais).subscribe(
        (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
        (err) => (this.paisesSugeridos = []));
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
};
