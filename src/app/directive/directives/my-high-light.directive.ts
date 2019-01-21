import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[my-high-light]'
})

export class MyHighLightDirective {
  @Input()
  highlightColor: string;

  @HostBinding('class')
  myClass: string;

  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.backgroundColor = '#ff3300';
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
