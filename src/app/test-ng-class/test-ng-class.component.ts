import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-class',
  templateUrl: './test-ng-class.component.html',
  styleUrls: ['./test-ng-class.component.scss']
})
export class TestNgClassComponent implements OnInit {
  currentClasses = {};
  canSave: boolean = true;
  isUnchanged: boolean = false;
  isSpecial: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  setCurrentClasses() {
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': this.isUnchanged,
      'special': this.isSpecial
    };
  }
}
