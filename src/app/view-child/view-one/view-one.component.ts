import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.scss']
})
export class ViewOneComponent implements OnInit {
  id: string;
  @Input()
  title: string = '我是view-one';

  @Output()
  helloEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    this.id = 'id-' + Math.floor(Math.random() * 100000000);
   }

  ngOnInit() {
  }
  sayHello() {
    this.helloEvent.emit(this.id);
  }
}
