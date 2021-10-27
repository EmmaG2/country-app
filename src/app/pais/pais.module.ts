import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorContinenteComponent } from './pages/por-continente/por-continente.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorContinenteComponent,
    VerPaisComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorContinenteComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
]
})
export class PaisModule {}
