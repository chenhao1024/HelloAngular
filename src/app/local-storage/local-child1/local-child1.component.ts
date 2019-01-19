import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-child1',
  templateUrl: './local-child1.component.html',
  styleUrls: ['./local-child1.component.scss']
})
export class LocalChild1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
  public writeData(): void {
    localStorage.setItem('json', JSON.stringify({ name: '韩信', age: 18 }));
  }
}
