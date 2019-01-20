import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child222',
  templateUrl: './child222.component.html',
  styleUrls: ['./child222.component.scss']
})
export class Child222Component implements OnInit {
  public time: string = new Date().toLocaleString();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('2号子组件的ngAfterViewInit...');
  }

  ngAfterViewChecked() {
    console.log('2号子组件的ngAfterViewChecked...');
  }

  public setTime(time: string): void {
    this.time = time;
  }

}
