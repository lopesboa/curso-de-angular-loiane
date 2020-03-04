import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomeDoPortal: string;

  listaDeCursos: string[]

  constructor(
    private curoService: CursosService
  ) {
    this.nomeDoPortal = 'http://loiane.training'

    this.listaDeCursos = this.curoService.getCursos()
   }

  ngOnInit(): void {
  }

}
