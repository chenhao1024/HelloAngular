import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import {ChildnumtwoComponent} from '../childnumtwo/childnumtwo.component';
@Component({
  selector: 'app-childnumone',
  templateUrl: './childnumone.component.html',
  styleUrls: ['./childnumone.component.scss']
})
export class ChildnumoneComponent implements OnInit {
  @ContentChildren(ChildnumtwoComponent)
  childrenTwo: QueryList<ChildnumtwoComponent>;
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(): void {
    this.childrenTwo.forEach(item => {
      console.log(item);
      console.log(item.hello);
    })
  }
}
