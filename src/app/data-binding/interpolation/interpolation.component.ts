import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent implements OnInit {
  url = 'http://loiane.com';

  constructor() {}

  ngOnInit(): void {}
}
