import { Component, OnInit } from '@angular/core';

interface IDadosPessoais {
  nome: string,
  idade: number,
  endereco: {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string
  }
}

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})


export class MeuFormComponent implements OnInit {

  nome: string = 'abc'

  dadosPessoais: IDadosPessoais = {
    nome: 'Lopes',
    idade: 32,
    endereco: {
      rua: 'B',
      numero: 34,
      bairro: 'Vila',
      cidade: 'SP'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
