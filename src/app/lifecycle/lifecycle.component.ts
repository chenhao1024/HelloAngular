import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
  myTitle: string = '默认标题';
  constructor() {
    setTimeout(() => {
      this.myTitle = '新标题' + new Date().toLocaleString();
    }, 1000);
   }

  ngOnInit() {
  }

}
