import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgForIfComponent } from './test-ng-for-if/test-ng-for-if.component';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { TestSafeNavComponent } from './test-safe-nav/test-safe-nav.component';
import { TestTempRefVarComponent } from './test-temp-ref-var/test-temp-ref-var.component';
import { TestTwowayBindingComponent } from './test-twoway-binding/test-twoway-binding.component';
import { FontResizerComponent } from './test-twoway-binding/font-resizer/font-resizer.component';
import { TestValueBindComponent } from './test-value-bind/test-value-bind.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { CommunicationComponent } from './communication/communication.component';
import { TemplateComponent } from './template/template.component';
import { ChildComponent } from './parent-and-child/child/child.component';
import { BrotherComponent } from './brother/brother.component';
import { Child1Component } from './brother/child1/child1.component';
import { Child2Component } from './brother/child2/child2.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { LocalChild1Component } from './local-storage/local-child1/local-child1.component';
import { LocalChild2Component } from './local-storage/local-child2/local-child2.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifeCycleComponent } from './lifecycle/life-cycle/life-cycle.component';
import { NgOnChangesComponent } from './lifecycle/ng-on-changes/ng-on-changes.component';
import { Child11Component } from './lifecycle/ng-on-changes/child1/child1.component';
import { CycleParentComponent } from './lifecycle/cycle-parent/cycle-parent.component';
import { Child111Component } from './lifecycle/cycle-parent/child111/child111.component';
import { Child222Component } from './lifecycle/cycle-parent/child222/child222.component';
import { AnimationComponent } from './animation/animation.component';
import { FlyInComponent } from './animation/fly-in/fly-in.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { CompComponent } from './dynamic/comp/comp.component';
import { CompChildComponent } from './dynamic/comp/comp-child/comp-child.component';
import { ShadowdomComponent } from './shadowdom/shadowdom.component';
import { EmulateModeComponent } from './shadowdom/emulate-mode/emulate-mode.component';
import { NoneModeComponent } from './shadowdom/none-mode/none-mode.component';
import { ShadowDownModeComponent } from './shadowdom/shadow-down-mode/shadow-down-mode.component';
import { ContentComponent } from './content/content.component';
import { NgContentComponent } from './content/ng-content/ng-content.component';
import { ChildTwoComponent } from './content/ng-content/child-two/child-two.component';
import { ChildThreeComponent } from './content/ng-content/child-three/child-three.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ChildnumoneComponent } from './content-child/childnumone/childnumone.component';
import { ChildnumtwoComponent } from './content-child/childnumtwo/childnumtwo.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewOneComponent } from './view-child/view-one/view-one.component';
import { DirectiveComponent } from './directive/directive.component';
import { CardComponent } from './directive/card/card.component';
import { MyHighLightDirective } from './directive/directives/my-high-light.directive';
import { DelayDirective } from './directive/directives/delay.directive';
import { UnlessDirective } from './directive/directives/unless.directive';
import { TestComponentComponent } from './directive/test-component/test-component.component';
import { NgmoduleComponent } from './ngmodule/ngmodule.component';
import { OrderMngComponent } from './ngmodule/order-mng/order-mng.component';
import { OrderServiceService } from './ngmodule/order-mng/order-service.service';
// import { OrderInfoComponent } from './order-info/order-info.component';
// import { UserInfoComponent } from './user-info/user-info.component';
// import { HomeComponent } from './home/home.component';
// import { JokesComponent } from './jokes/jokes.component';
@NgModule({
  declarations: [
    AppComponent,
    TestEventBindingComponent,
    TestInterpolationComponent,
    TestNgClassComponent,
    TestNgForIfComponent,
    TestNgModelComponent,
    TestNgStyleComponent,
    TestNgSwitchComponent,
    TestPipeComponent,
    TestSafeNavComponent,
    TestTempRefVarComponent,
    TestTwowayBindingComponent,
    FontResizerComponent,
    TestValueBindComponent,
    ParentAndChildComponent,
    CommunicationComponent,
    TemplateComponent,
    ChildComponent,
    BrotherComponent,
    Child1Component,
    Child2Component,
    LocalStorageComponent,
    LocalChild1Component,
    LocalChild2Component,
    LifecycleComponent,
    LifeCycleComponent,
    NgOnChangesComponent,
    Child11Component,
    CycleParentComponent,
    Child111Component,
    Child222Component,
    AnimationComponent,
    FlyInComponent,
    DynamicComponent,
    CompComponent,
    CompChildComponent,
    ShadowdomComponent,
    EmulateModeComponent,
    NoneModeComponent,
    ShadowDownModeComponent,
    ContentComponent,
    NgContentComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ContentChildComponent,
    ChildnumoneComponent,
    ChildnumtwoComponent,
    ViewChildComponent,
    ViewOneComponent,
    DirectiveComponent,
    CardComponent,
    MyHighLightDirective,
    DelayDirective,
    UnlessDirective,
    TestComponentComponent,
    NgmoduleComponent,
    OrderMngComponent,
    // OrderInfoComponent,
    // UserInfoComponent,
    // HomeComponent,
    // JokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [OrderServiceService],
  bootstrap: [AppComponent],
  entryComponents: [CompChildComponent] // 入口组件（entry component）是通过组件的类型动态加载
})
export class AppModule { }
