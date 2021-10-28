import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../inferfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})

export class PorPaisComponent {

  termino:string = "";
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor( private paisService:PaisService ) { }

  buscar() {

    this.hayError = false;
    this.paisService.buscarPais( this.termino )
    .subscribe( (pais) => {
      this.paises = pais;
    }, 
    
    (err) => {
      console.log( "error" );
      this.hayError = true;
      this.paises = [];
      
      
    });
  };

};
