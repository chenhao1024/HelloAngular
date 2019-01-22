import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from './order-service.service';

@Component({
  selector: 'app-order-mng',
  templateUrl: './order-mng.component.html',
  styleUrls: ['./order-mng.component.scss']
})
export class OrderMngComponent implements OnInit {
  orders: Array<any>;
  constructor(private orderService: OrderServiceService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrderList();
  }

}
