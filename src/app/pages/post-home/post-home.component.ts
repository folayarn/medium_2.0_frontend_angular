import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { setType } from 'src/app/store/state.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { State } from 'src/app/store/state.reducer';


@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']

})
export class PostHomeComponent implements OnInit {
user:any
  constructor(private http:HttpService,private modalService: MdbModalService,private store:Store<State>,
    private title:Title ) {
    this.store.select('reducers').pipe().subscribe(
      (data:any) => {
  this.user=data.user;
      });
      this.title.setTitle(`Homepage`)
  }
data:any=[];
spinner:boolean=false
page:number=1;
notScrolly:boolean=true;
notEmptyPost:boolean=true
modalRef: MdbModalRef<ModalComponent>|number = 1;
  ngOnInit(): void {

    this.http.getPost(this.page).subscribe(res=>{
      this.data=res.Data
      this.title.setTitle(`Homepage::${this.user.Name.toUpperCase()}`)


    })
  }



reload(){
  window.location.reload();
}
  loadData(){
    this.http.getPost(++this.page).subscribe(res=>{
     this.spinner=false
      if(res.Data.length<0){
        this.notEmptyPost=false
      }
        this.data.push(...res.Data)
        this.notScrolly=true;

    })
  }
  onScroll(event:any) {
    if(this.notEmptyPost && this.notScrolly){
      this.spinner=true
      this.notScrolly=false;
      this.loadData();
    }


  }


  openModal(){
    this.store.dispatch(setType({ types: 'create' }));
    this.modalRef = this.modalService.open(ModalComponent,{
      modalClass: 'modal-fullscreen'
    })
  }















}

