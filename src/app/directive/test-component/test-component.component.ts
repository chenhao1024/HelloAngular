import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  @Input()
  highlightColor: string;
  private containerEl: any;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.el.nativeElement);
    console.log(this.el.nativeElement.childNodes);
    console.log(this.el.nativeElement.childNodes[0]);
    console.log(this.el.nativeElement.innerHTML);
    this.containerEl = this.el.nativeElement.childNodes[0];
  }

  @HostListener('mouseenter') onmouseenter() {
    this.hightlight(this.highlightColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.hightlight(null);
  }


  private hightlight(color: string) {
    this.containerEl.style.backgroundColor = color;
  }

}
