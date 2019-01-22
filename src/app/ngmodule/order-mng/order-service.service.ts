import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  constructor() { }

  getOrderList(): Array<any> {
    return [
      {orderId: '10086', orderName: 'ForTest1'},
      {orderId: '10087', orderName: 'ForTest'},
      {orderId: '10088', orderName: 'ForTest'},
      {orderId: '10089', orderName: 'ForTest'},
      {orderId: '10090', orderName: 'ForTest'}
    ];
  }
}
