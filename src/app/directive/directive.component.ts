import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  condition: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  Toggle() {
    this.condition = !this.condition;
  }
}
