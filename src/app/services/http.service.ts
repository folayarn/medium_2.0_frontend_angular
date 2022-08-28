import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements HttpInterceptor{
   token :any= sessionStorage.getItem('tk');
  constructor(private http:HttpClient,private log:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let lreq=req

    return next.handle(lreq).pipe(
      retry(2),
      catchError(error => {
        if (error.status === 402){
          alert("session expired")
          this.log.logOut()
          window.location.reload()
        }
        return throwError(error);
      }
    )
    )
  }
  //url="https://medium2.herokuapp.com/api/v1/"
  url="http://localhost:8000/api/v1/"

  httpOptions={
    headers:{
      'Content-Type':  'application/json',
      'Token': `${this.token}`,
    }
  }

   id:any =sessionStorage.getItem('tfd')

   getProfile( id:string):Observable<any>{
    return this.http.get(this.url+"user/"+id,this.httpOptions)
   }
  getPost(page:number):Observable<any>{
    return this.http.get(`${this.url}articles?page=${page}`,this.httpOptions)
  }
  getUserPost(page:string):Observable<any>{
    return this.http.get(`${this.url}article-us?user=${page}`,this.httpOptions)
  }
  getSinglePost(id:number):Observable<any>{
    return this.http.get(this.url+'/article/'+id,this.httpOptions)
     }


  createPost(data:any):Observable<any>{
 return this.http.post(this.url+'new/article/',data,this.httpOptions)
  }

  fetchUser():Observable<any>{
    return this.http.get(this.url+"user/"+this.id,this.httpOptions)
  }

  addTags(data:string):Observable<any>{
return this.http.post(this.url+'tag',data,this.httpOptions)
  }
  comment(data:any):Observable<any>{
    return this.http.post(this.url+'comment',data,this.httpOptions)
  }

  like(data:any):Observable<any>{
    return this.http.post(this.url+'love',data,this.httpOptions)
  }

  unlike(data:any):Observable<any>{
    return this.http.post(this.url+'unlove',data,this.httpOptions)
  }

  getlikes(data:any):Observable<any>{
    return this.http.post(this.url+'get-loves',data,this.httpOptions)
  }
  getFavorite():Observable<any>{
    return this.http.get(this.url+'favs',this.httpOptions)
  }
  addFavorite(data:any):Observable<any>{
    return this.http.post(this.url+'fav',data,this.httpOptions)
  }
  removeFavorite(data:any):Observable<any>{
    return this.http.post(this.url+'remove-fav',data,this.httpOptions)
  }
}
