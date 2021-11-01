import { Component, Input } from '@angular/core';

import { Pais } from '../../inferfaces/pais.interface';

@Component({
  selector: 'app-table-pais',
  templateUrl: './table-pais.component.html'
})
export class TablePaisComponent {

  @Input() paises: Pais[] = []
  constructor() { }


}
