import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommunicationComponent} from './communication/communication.component';
import {TemplateComponent} from './template/template.component';
const routes: Routes = [
  {path: '', component: TemplateComponent},
  {path: 'communication', component: CommunicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
