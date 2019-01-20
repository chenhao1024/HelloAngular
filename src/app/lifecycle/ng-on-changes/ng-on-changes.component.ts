import { Component, OnInit } from '@angular/core';

interface Obj {
  userName: string;
}

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.scss']
})


export class NgOnChangesComponent implements OnInit {
  userName: string = '默认用户1';
  userObj: Obj = {userName: '默认用户2'};
  constructor() { }

  ngOnInit() {
  }

}
