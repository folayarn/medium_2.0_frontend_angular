import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateAuthGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkRoute();
  }

  checkRoute(){
    if(sessionStorage.getItem('tk')){
      if(sessionStorage.getItem('rx')=="admin"){
        this.router.navigate(['/admin'])
        return false
      }else{
        this.router.navigate(['/home'])
        return false
      }

    }else{
return true
    }
  }

}
