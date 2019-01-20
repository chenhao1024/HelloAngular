import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-child',
  templateUrl: './comp-child.component.html',
  styleUrls: ['./comp-child.component.scss']
})
export class CompChildComponent implements OnInit {
  @Input()
  title: string = '默认的标题';

  @Output()
  btnClick: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  triggerEvent(): void {
    this.btnClick.emit('第一个子组件的点击事件...');
  }
}
