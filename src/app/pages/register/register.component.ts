import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setError, setText } from 'src/app/store/state.actions';
import {setStorage } from 'src/app/utility';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private HttpService:AuthService,private router:Router,private store:Store) { }

  ngOnInit(): void {
  }
form=new FormGroup({
name: new FormControl(''),
email:new FormControl(''),
username:new FormControl(''),
password:new FormControl(null,[Validators.required,Validators.minLength(6)],),
})

 returnData :any;
 loading:any=false;


submit(){
  this.loading=true
  var data={
  ...this.form.value,
    role:'user'
  }

  if(this.form.valid){
    this.HttpService.register(data).subscribe(res=>{
      setStorage(res.id,res.token,res.role);
      this.loading=false
       this.router.navigateByUrl('/home')
    },
    error=>{
      console.log(error)
      this.store.dispatch(setError({ error: true }));
      this.store.dispatch(
        setText({ text: 'Error Occured,Try again' })
      );
      this.loading=false

    }
    )

  }else{
    this.store.dispatch(setError({ error: true }));
    this.store.dispatch(
      setText({ text: 'One or more Input is Empty, Fill all' })
    );
     this.loading=false
  }


  }


}





