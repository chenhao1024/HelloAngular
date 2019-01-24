import { Route, PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';
// import 'rxjs/add/observable/of';  7.o版本直接从rxjs中引入of


export class MypreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : of(null);
  }
}
