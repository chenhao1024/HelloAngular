import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-safe-nav',
  templateUrl: './test-safe-nav.component.html',
  styleUrls: ['./test-safe-nav.component.scss']
})
export class TestSafeNavComponent implements OnInit {
  currentRace: any = null;
  constructor() { }

  ngOnInit() {
  }

}
