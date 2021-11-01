import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorContinenteComponent } from './pages/por-continente/por-continente.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { TablePaisComponent } from './components/table-pais/table-pais.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorContinenteComponent,
    VerPaisComponent,
    TablePaisComponent,
    PaisInputComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorContinenteComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
]
})
export class PaisModule {}
