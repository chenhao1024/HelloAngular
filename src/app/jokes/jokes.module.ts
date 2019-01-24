import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {JokesComponent} from './jokes.component';
import {jokesRoutes} from './jokes.routes';
import { SharedModule} from '../shared/shared.moudle';
@NgModule({
  declarations: [JokesComponent],
  imports: [RouterModule.forChild(jokesRoutes), SharedModule],
  providers: [],
  bootstrap: []
})

export class JokesModule {}
