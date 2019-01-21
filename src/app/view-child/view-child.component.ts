import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {ViewOneComponent} from './view-one/view-one.component';
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  @ViewChildren(ViewOneComponent)
  children: QueryList<ViewChildComponent>;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.children.forEach(item => {
      item.helloEvent.subscribe(data => {
        console.log(data);
      })
    })
  }
}
