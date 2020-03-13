import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent implements OnInit {
  isMouseOver = false;
  valorDigitado = '';
  valorSalvo: string;

  constructor() {}

  botaoClicado() {
    alert('Botao Clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorDigitado = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit(): void {}
}
