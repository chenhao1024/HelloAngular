import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-value-bind',
  templateUrl: './test-value-bind.component.html',
  styleUrls: ['./test-value-bind.component.scss']
})
export class TestValueBindComponent implements OnInit {
  imgSrc: string = './assets/imgs/1.jpg';
  constructor() { }

  ngOnInit() {
  }
  changeSrc(): void {
    if (Math.ceil(Math.random() * 1000000000) % 2) {
      this.imgSrc = './assets/imgs/2.jpg';
    } else {
      this.imgSrc = './assets/imgs/1.jpg';
    }
  }
}
