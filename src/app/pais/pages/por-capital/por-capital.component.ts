import { Component } from '@angular/core';
import { Pais } from '../../inferfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  capitales: Pais[] = [];

  constructor(private capitalService: PaisService) {}

  

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.capitalService.buscarCapital(this.termino).subscribe(
      (capital) => {
        this.capitales = capital;
      },
      (err) => {
        this.hayError = true;
        this.capitales = [];
      }
    );
  }
};
