import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    LocalChild2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
