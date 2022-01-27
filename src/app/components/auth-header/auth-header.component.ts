import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Store } from '@ngrx/store';
import { setLoading } from 'src/app/store/state.actions';
import { isAdmin } from 'src/app/utility';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})
export class AuthHeaderComponent implements OnInit {

  constructor(private http:HttpService,private router:Router,private store:Store) { }

  ngOnInit(): void {
  }

  admin:boolean=isAdmin();

  logout(){
    this.store.dispatch(setLoading({loading:true}))
    setTimeout(()=>{
      this.http.logOut()
      this.router.navigateByUrl('/login')
      this.store.dispatch(setLoading({loading:false}))
    },4000)
  }


}
