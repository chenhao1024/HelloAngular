import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childnumtwo',
  templateUrl: './childnumtwo.component.html',
  styleUrls: ['./childnumtwo.component.scss']
})
export class ChildnumtwoComponent implements OnInit {
  hello: string = '666';
  constructor() { }

  ngOnInit() {
  }
  public sayHello(): void {
    console.log('Hello 大漠穷秋!');
  }
}
