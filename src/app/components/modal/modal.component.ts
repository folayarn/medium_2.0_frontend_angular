import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/services/http.service';
import { State } from 'src/app/store/state.reducer';
import { setError, setSuccess, setText } from '../../store/state.actions'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
id!:number
post:any
comment:string=""
@Input() type!:string
user:any
text:string='Comment'
  types!: string;
  constructor(public modalRef: MdbModalRef<ModalComponent>,private store: Store<State>,private http:HttpService) {
      store.select('reducers').pipe().subscribe(
      (data:any) => {
  this.id=data.postID;
  this.user=data.user;
  this.types=data.types;

      });

   }

  ngOnInit(): void {
if(this.types=="article"){
  this.http.getSinglePost(this.id).subscribe(res=>{
    this.post=res
    },err=>{
      console.log(err)
    })
}
  }

  submit(){
this.text='Commenting...'
   let data={
    user_id:this.user.ID,
    article_id:this.id,
    author:this.user.Name,
    body:this.comment
   }

   this.http.comment(data).subscribe(res=>{
    this.http.getSinglePost(this.id).subscribe(re=>{
      this.post=re

      },er=>{
        this.store.dispatch(setError({ error: true }));
        this.store.dispatch(
          setText({ text: 'Failed to fetch' })
        );
      })

    this.store.dispatch(setSuccess({ success: true }));
    this.store.dispatch(
      setText({ text: 'comment sent' })
    );
    this.comment=""
    this.text='Comment'
   },err=>{
    this.store.dispatch(setError({ error: true }));
    this.store.dispatch(
      setText({ text: 'Something went wrong, Failed' })
    );
    this.text='Comment'
  })
  }





}
