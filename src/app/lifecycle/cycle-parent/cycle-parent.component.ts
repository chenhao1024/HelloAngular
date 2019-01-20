import { Component, OnInit, ViewChild } from '@angular/core';
import {Child111Component} from './child111/child111.component';
@Component({
  selector: 'app-cycle-parent',
  templateUrl: './cycle-parent.component.html',
  styleUrls: ['./cycle-parent.component.scss']
})
export class CycleParentComponent implements OnInit {
  // @ViewChild('child111')
  // child111: Child111Component;

  @ViewChild('child222') child222;
  constructor() { }

  ngOnInit() {
    setInterval(
      () => {
        // this.child111.setTime(new Date().toLocaleString());
        this.child222.setTime(new Date().toLocaleString());
      }
    , 1000);
  }

  ngAfterViewInit() {
    console.log('父组件的ngAfterViewInit...');
  }

  ngAfterViewChecked() {
    console.log('父组件的ngAfterViewChecked...');
  }

}
