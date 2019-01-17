import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgForIfComponent } from './test-ng-for-if/test-ng-for-if.component';

@NgModule({
  declarations: [
    AppComponent,
    TestEventBindingComponent,
    TestInterpolationComponent,
    TestNgClassComponent,
    TestNgForIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
