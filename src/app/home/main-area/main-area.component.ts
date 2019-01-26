import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {
  public menuName: string = '没有选择任何菜单';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: {id: string}) => {
      if (params.id === '1') {
        this.menuName = '只看图片';
      } else if (params.id === '2') {
        this.menuName = '只看文字';
      }
    });
  }

}
