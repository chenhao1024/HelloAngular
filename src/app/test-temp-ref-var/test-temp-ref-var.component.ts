import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-temp-ref-var',
  templateUrl: './test-temp-ref-var.component.html',
  styleUrls: ['./test-temp-ref-var.component.scss']
})
export class TestTempRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sayHello(name: string): void {
    alert(name);
  }
}
