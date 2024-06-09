import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';

@Inject({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{

  constructor (private loginService : LoginService, private router : Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{

      if (this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'administrador') {
        return true;
      }
      this.router.navigate(['/login'])
      return false;
  }
}
