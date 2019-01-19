import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit {
  logs: Array<string> = [];
  @Input()
  title: string = '父层的传递进来的标题';
  constructor() {
    this.logs.push('constructor...');
   }

  ngOnChanges() {
    this.logs.push('ngOnChanges...');
  }

  ngOnInit() {
    this.logs.push('ngOnInit...');
  }

  ngDoCheck() {
    this.logs.push('ngDoCheck...');
  }

  ngAfterContentInit() {
    this.logs.push('ngAfterContentInit...');
  }

  ngAfterContentChecked() {
    this.logs.push('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.logs.push('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logs.push('ngAfterViewChecked');
  }

  ngOnDestory() {
    this.logs.push('ngOnDestory...');
  }
}
