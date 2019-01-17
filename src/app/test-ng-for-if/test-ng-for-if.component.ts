import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-for-if',
  templateUrl: './test-ng-for-if.component.html',
  styleUrls: ['./test-ng-for-if.component.scss']
})
export class TestNgForIfComponent implements OnInit {
  races: any[] = [
    {name: '人族'},
    {name: '虫族'},
    {name: '神族'}
  ];
  isShow: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleShow(): void {
    this.isShow = !this.isShow;
  }
}
