import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  imageUrl: string = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
