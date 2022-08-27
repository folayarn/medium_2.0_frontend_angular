import { setType } from './../../store/state.actions';
import { Component,HostListener,Input, OnInit ,Renderer2} from '@angular/core';
// import { setComment } from '../../store/state.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/state.reducer';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { setpostID } from 'src/app/store/state.actions'
import { HttpService } from 'src/app/services/http.service';
import { Event } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {
  time!:string
  isComment!:boolean
  user:any
  likes:any
  modalRef: MdbModalRef<ModalComponent>|null = null;
  constructor(private store: Store<State>,private modalService: MdbModalService ,private renderer:Renderer2) {

    store.select('reducers').pipe().subscribe(
      (data:any)=> {
  this.user=data.user;
  this.likes=data.likes;
      });


  }

  ngOnInit(): void {
    console.log(this.user)
    this.time=moment(this.data.UpdatedAt).startOf('minute').fromNow()
  }




@Input()  data :any  ;

openModal(id:any){
  this.store.dispatch(setpostID({ id: id }));
  this.store.dispatch(setType({ types: 'article' }));
  this.modalRef = this.modalService.open(ModalComponent,{
    modalClass: 'modal-fullscreen'
  })

}



}
