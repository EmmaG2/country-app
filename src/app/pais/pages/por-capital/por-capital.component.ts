import {Component} from '@angular/core';

import {Pais} from '../../inferfaces/pais.interface';
import {PaisService} from '../../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  capitales: Pais[] = [];

  capitalesSugeridas: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private capitalService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.capitalService.buscarCapital(this.termino)
        .subscribe(
            (capital) => {
              this.capitales = capital;
            },
            (err) => {
              this.hayError = true;
              this.capitales = [];
            });
  }

  sugerencias(capital: string) {
    this.hayError = false;
    this.termino = capital;
    this.mostrarSugerencias = true;

    this.capitalService.buscarCapital(capital).subscribe(
        (capitales) => (this.capitalesSugeridas = capitales.splice(0, 5)),
        (err) => (this.capitalesSugeridas = []));
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
};
