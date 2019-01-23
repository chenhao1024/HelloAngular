import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {PictureComponent} from './picture/picture.component';
import {TextComponent} from './text/text.component';
export const homeRoutes = [{
  path: '',
  component: HomeComponent,
  children: [
  {
    path: '',
    redirectTo: 'picture',
    pathMatch: 'full'
  },
  {
    path: 'picture',
    component: PictureComponent
  },
  {
    path: 'text',
    component: TextComponent
  }
]
}
];
