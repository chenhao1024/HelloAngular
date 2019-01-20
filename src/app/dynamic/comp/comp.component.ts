import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { CompChildComponent } from './comp-child/comp-child.component';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent implements OnInit {
  @ViewChild('dyncomp', {read: ViewContainerRef})
  dyncomp: ViewContainerRef;
  comp1: ComponentRef<CompChildComponent>;
  comp2: ComponentRef<CompChildComponent>;
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log('动态创建组件的实例...');
    const childComp = this.resolver.resolveComponentFactory(CompChildComponent);
    this.comp1 = this.dyncomp.createComponent(childComp);
    this.comp1.instance.title = '111';
    this.comp1.instance.btnClick.subscribe((param) => {
      console.log('--->' + param);
    });
    this.comp2 = this.dyncomp.createComponent(childComp);
    this.comp2.instance.title = '第二个子组件';
  }
  destoryChild(): void {
    this.comp1.destroy();
    this.comp2.destroy();
  }
}
