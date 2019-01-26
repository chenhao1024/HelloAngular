import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.scss']
})
export class QuickStartComponent implements OnInit {
  userName: string;
  constructor() { }

  ngOnInit() {
  }
  userNameChange(event): void {
    console.log(event);
    this.userName = event.target.value;
  }
}
