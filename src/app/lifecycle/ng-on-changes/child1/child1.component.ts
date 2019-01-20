import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child11',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child11Component implements OnInit, DoCheck {
  @Input()
  userName: string = '';
  @Input()
  userObj = {};

  age: number = 18;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('Child1 ngDoCheck...' + new Date());
  }
}
