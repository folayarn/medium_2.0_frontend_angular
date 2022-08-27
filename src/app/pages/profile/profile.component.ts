import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { setType } from 'src/app/store/state.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  active = 1;
  id!:string
  jsonData:any
  modalRef: MdbModalRef<ModalComponent>|null = null;
  constructor(private store: Store,private route:ActivatedRoute,private http:HttpService,private title:Title,private modalService: MdbModalService) { 

    title.setTitle("Profile")
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['token'];
    });
   
    this.http.getProfile(this.id).subscribe(response => {
      this.jsonData=response
      this.title.setTitle( `${this.jsonData.Name.toUpperCase()}`)
          },err=>{
      
            console.log(err)
          })
         
    
  }
  openModal(){
    this.store.dispatch(setType({ types: 'edit-user' }));
    this.modalRef = this.modalService.open(ModalComponent,{
      modalClass: 'modal-lg',
      animation: true,
      backdrop: true,
      ignoreBackdropClick:true,
      keyboard:false
    })
  
  }
}
