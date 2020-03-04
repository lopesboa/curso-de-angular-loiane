import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomeDoPortal: string;

  listaDeCursos: string[] = ['Java', 'Angular', 'Typescript', 'Nodejs']

  constructor() {
    this.nomeDoPortal = 'http://loiane.training'
   }

  ngOnInit(): void {
  }

}
