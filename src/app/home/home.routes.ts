import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {PictureComponent} from './picture/picture.component';
import {TextComponent} from './text/text.component';
import {LeftNavComponent} from './left-nav/left-nav.component';
import {MainAreaComponent} from './main-area/main-area.component';
export const homeRoutes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'home',
  component: HomeComponent,
  children: [
  {
    path: 'picture',
    component: PictureComponent
  },
  {
    path: 'text',
    component: TextComponent
  },
  {
    path: 'leftNav',
    component: LeftNavComponent,
    outlet: 'left-nav'
},
{
    path: ':id',
    component: MainAreaComponent,
    outlet: 'main-area'
}
]
}
];
