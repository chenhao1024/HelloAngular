import { Component, OnInit, ViewChild } from '@angular/core';
import {ChildComponent} from './child/child.component';
@Component({
  selector: 'app-parent-and-child',
  templateUrl: './parent-and-child.component.html',
  styleUrls: ['./parent-and-child.component.scss']
})
export class ParentAndChildComponent implements OnInit {
  @ViewChild(ChildComponent)
  private childComponent: ChildComponent;
  constructor() { }

  ngOnInit() {
  }

  public doSomething(event: string): void {
    alert('收到了子组件的自定义事件' + event);
  }

}
