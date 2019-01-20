import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child111',
  templateUrl: './child111.component.html',
  styleUrls: ['./child111.component.scss']
})
export class Child111Component implements OnInit {
  time: string = new Date().toLocaleString();
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log('1号子组件的ngAfterViewInit...');
  }

  ngAfterViewChecked() {
    console.log('1号子组件的ngAfterViewChecked...');
  }

  public setTime(time: string): void {
    this.time = time;
  }
}
