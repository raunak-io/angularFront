import { AuthService } from './../services/auth.service';
import { UsersService } from './../services/users.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const role = this.service.getRole();
    const adminRole = 'admin';
    if (adminRole != role) {
      this.router.navigate(['/']);
    } else if (adminRole == role) {
      return role;
    }
  }
}
