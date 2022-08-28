import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/services/http.service';
import { setError, setSuccess, setText } from 'src/app/store/state.actions';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.css']
})
export class TagsPageComponent implements OnInit {

  constructor(private http:HttpService,private store:Store) { }

  ngOnInit(): void {
  }
  form=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.maxLength(13)]),
  })

  submit() {
   
 this.http.addTags(this.form.value).subscribe(res=>{
   this.form.reset()
   this.store.dispatch(setSuccess({success:true}))
   this.store.dispatch(setText({text:"Successfully added"}))

   setTimeout(()=>{
    this.store.dispatch(setSuccess({success:false}))
  },3000)
 },err =>{
  this.form.reset()
  this.store.dispatch(setError({error:true}))
  this.store.dispatch(setText({text:err.error}))
  setTimeout(()=>{
    this.store.dispatch(setError({error:false}))
  },3000)
 })

  }
}
