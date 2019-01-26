import { Component, OnInit } from '@angular/core';
import {RegisterModel} from './model/register-model';
@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.scss']
})
export class QuickStartComponent implements OnInit {
  regModel: RegisterModel = new RegisterModel();
  constructor() { }

  ngOnInit() {
  }
  // userNameChange(event): void {
  //   console.log(event);
  //   this.userName = event.target.value;
  // }
}
