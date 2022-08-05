import {Component, Input} from '@angular/core';

import {Pais} from '../../inferfaces/pais.interface';

@Component({
  selector: 'app-table-pais',
  templateUrl: './table-pais.component.html',
  styleUrls: ['./table-pais.component.scss']
})
export class TablePaisComponent {
  @Input() paises: Pais[] = [];
  @Input() capitales: Pais[] = [];
  constructor() {}
}
