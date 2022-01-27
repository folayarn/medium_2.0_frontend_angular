import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { notMatch, setStorage } from 'src/app/utility';
import { HttpService } from './../../services/http.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private HttpService:HttpService,private router:Router) { }

  ngOnInit(): void {
  }
form=new FormGroup({

name: new FormControl(''),
email:new FormControl(''),
password:new FormControl(null,[Validators.required,Validators.minLength(6)],),
c_password:new FormControl(null,
  [Validators.required,
  Validators.minLength(6)],)
})

 returnData :any;
 loading:any=false;
 iserr:any=false

submit(){
  this.loading=true
  var data={
    name:this.form.get('name')?.value,
    email:this.form.get('email')?.value,
    password:this.form.get('password')?.value,
    role:'user'
  }
  var password = this.form.get('password')?.value
  var c_password=this.form.get('c_password')?.value
  if(password !==c_password){
this.isMatch=false
return
  }else{
    this.HttpService.register(data).subscribe(res=>{
      setStorage(res.id,res.token,res.role);
      this.loading=false
       this.router.navigateByUrl('/home')
    },
    error=>{
      this.loading=false
      this.iserr=true
    }
    )
  }


}

 isMatch:boolean=true
notMatch(){
  var password = this.form.get('password')?.value
  var c_password=this.form.get('c_password')?.value
 this.isMatch= notMatch(password,c_password)


}

}
