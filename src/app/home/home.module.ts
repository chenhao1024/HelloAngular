import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';
import {SharedModule} from '../shared/shared.moudle';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MainAreaComponent } from './main-area/main-area.component';

@NgModule({
  declarations: [HomeComponent, PictureComponent, TextComponent, LeftNavComponent, MainAreaComponent],
  imports: [RouterModule.forChild(homeRoutes), SharedModule],
  providers: [],
  bootstrap: []
})

export class HomeModule {}
