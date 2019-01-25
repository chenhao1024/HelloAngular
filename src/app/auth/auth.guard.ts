import {Injectable} from '@angular/core';
import {CanLoad, CanActivate, CanActivateChild} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {

  }

  canLoad() {
    return this.authService.canLoad();
  }

  canActivate() {
    return this.authService.canActivate();
  }

  canActivateChild() {
    return true;
  }
}
