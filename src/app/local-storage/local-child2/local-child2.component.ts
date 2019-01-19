import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-child2',
  templateUrl: './local-child2.component.html',
  styleUrls: ['./local-child2.component.scss']
})
export class LocalChild2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  readData(): void {
    const json = localStorage.getItem('json') ? localStorage.getItem('json') : '{}';
    const obj = JSON.parse(json);
    console.log(obj.name + ':' + obj.age);
  }
}
