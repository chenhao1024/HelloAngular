import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event-binding',
  templateUrl: './test-event-binding.component.html',
  styleUrls: ['./test-event-binding.component.sass']
})
export class TestEventBindingComponent implements OnInit {

  constructor() { }
  public btnClick(event): void {
    console.log(event);
    alert('测试事件绑定');
  }
  ngOnInit() {
  }

}
