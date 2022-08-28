import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {setError, setLoading, setText} from './store/state.actions'
import { Store } from '@ngrx/store';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private helper:JwtHelperService,){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.checkToken();
  }

 
  checkToken(){
    let tokenEpired :boolean= this.helper.isTokenExpired(<string>sessionStorage.getItem('tk'));
    if(!tokenEpired){
    
     return true
    }else{
      sessionStorage.clear();
      localStorage.clear();
this.router.navigate(['/login'])
      return false

    }
  }
}
