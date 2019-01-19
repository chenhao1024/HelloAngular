import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  serviceService: any;

  constructor(serviceService: ServiceService) {
    this.serviceService = serviceService;
  }

  ngOnInit() {
  }
  triggerEventBus(): void {
    this.serviceService.eventBus.next('第一个组件触发的事件');
  }
}
