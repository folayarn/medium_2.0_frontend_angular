import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { setError, setLoading, setText} from '../../store/state.actions'

import { setStorage } from 'src/app/utility';
import { Store } from '@ngrx/store';
import { AppState, State } from './../../store/state.reducer';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnData:any;

  constructor(private http:AuthService,
  private router:Router,
  private store:Store){

   }

  ngOnInit(): void {
  }

  form=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
   })




  submit(){

   
 this.store.dispatch(setLoading({loading:true}))
    this.http.login(this.form.value).subscribe(res=>{
      if(res.role==='admin'){
        setStorage(res.id,res.token,res.role);
        this.router.navigateByUrl('/admin')
        this.store.dispatch(setLoading({loading:false}))
      }else{
        setStorage(res.id,res.token,res.role);
        this.router.navigateByUrl('/home')
        this.store.dispatch(setLoading({loading:false}))
      }
          },err=>{
            console.log(err)
            this.store.dispatch(setError({error:true}))
            this.store.dispatch(setText({text:'Invalid Request'}))
        this.store.dispatch(setLoading({loading:false}))
        setTimeout(()=>{
          this.store.dispatch(setError({error:false}))
        },2000)
          })
  }

}
