import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
  // outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorDoInput: ElementRef;

  incrementa() {
    this.campoValorDoInput.nativeElement.value++;
    // console.log(this.valorDoInput.nativeElement.value)
    // this.valor++
    // this.mudouValor.emit({ novoValor: this.valor })
  }
  decrementa() {
    this.campoValorDoInput.nativeElement.value--;
    // this.valor--
    // ; this.mudouValor.emit({ novoValor: this.valor })
  }

  constructor() {}

  ngOnInit(): void {}
}
