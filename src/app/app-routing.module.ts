import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommunicationComponent} from './communication/communication.component';
import {LifecycleComponent} from './lifecycle/lifecycle.component';
import {TemplateComponent} from './template/template.component';
import {AnimationComponent} from './animation/animation.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import {ShadowdomComponent} from './shadowdom/shadowdom.component';
import {ContentComponent} from './content/content.component';
import {ContentChildComponent} from './content-child/content-child.component';
import {ViewChildComponent} from './view-child/view-child.component';
const routes: Routes = [
  {path: '', component: TemplateComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'dynamic', component: DynamicComponent},
  {path: 'shadowdom', component: ShadowdomComponent},
  {path: 'content', component: ContentComponent},
  {path: 'content-child', component: ContentChildComponent},
  {path: 'view-child', component: ViewChildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
