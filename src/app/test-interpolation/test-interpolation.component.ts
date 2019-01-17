import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-interpolation',
  templateUrl: './test-interpolation.component.html',
  styleUrls: ['./test-interpolation.component.sass']
})
export class TestInterpolationComponent implements OnInit {
  title = 'ddd';
  constructor() { }

  ngOnInit() {
  }
  getVal(): number {
    return 3214;
  }
}
