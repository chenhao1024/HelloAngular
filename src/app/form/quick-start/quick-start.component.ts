import { Component, OnInit } from '@angular/core';
import {RegisterModel} from './model/register-model';
import {NgForm} from '@angular/forms';
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
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
