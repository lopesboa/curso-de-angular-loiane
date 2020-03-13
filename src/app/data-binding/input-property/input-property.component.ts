import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
  // inputs: ['nomeCurso: nome']
})
export class InputPropertyComponent implements OnInit {
  @Input() portalCurso: string;
  constructor() {}

  ngOnInit(): void {}
}
