import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommunicationComponent} from './communication/communication.component';
import {LifecycleComponent} from './lifecycle/lifecycle.component';
import {TemplateComponent} from './template/template.component';
import {AnimationComponent} from './animation/animation.component';
import {DynamicComponent} from './dynamic/dynamic.component';
const routes: Routes = [
  {path: '', component: TemplateComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'dynamic', component: DynamicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
