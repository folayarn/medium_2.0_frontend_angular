import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8000/api/v1/"
   token:any =sessionStorage.getItem('tk')
   id:any =sessionStorage.getItem('tfd')
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.token,
      'Token': this.token
    })
  }

  getPost():Observable<any>{
    return this.http.get(this.url)
  }

  Post(data:any):Observable<any>{
 return this.http.post(this.url,data)
  }

  login(data:any): Observable<any>{
    return this.http.post(this.url+'user/login',data)
  }

  register(data:any):Observable<any>{

    return this.http.post(this.url+'user',data)
  }

  fetchUser():Observable<any>{
    return this.http.get(this.url+"user/"+this.id,this.httpOptions)
  }

  addTags(data:string):Observable<any>{
return this.http.post(this.url+'tag',data,this.httpOptions)
  }


  logOut():void{
return sessionStorage.clear()
  }
}
