import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:8000/api/v1/"
  
  constructor(private httpBackend:HttpBackend) {
    
   }

  login(data:any): Observable<any>{
  const http=new HttpClient(this.httpBackend)
    return http.post(this.url+'user/login',data)
  }

  register(data:any):Observable<any>{
    const http=new HttpClient(this.httpBackend)
    return http.post(this.url+'user',data)
  }
  logOut():void{
    return sessionStorage.clear()
      }
}
