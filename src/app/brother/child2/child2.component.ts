import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  public events: Array<any> = [];
  serviceService: any;
  constructor(serviceService: ServiceService) {
    this.serviceService = serviceService;
  }

  ngOnInit() {
    this.serviceService.eventBus.subscribe((value) => {
      this.events.push(value + '-' + new Date());
    });
  }

}
