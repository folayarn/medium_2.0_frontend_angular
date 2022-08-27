import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-save-btn',
  templateUrl: './save-btn.component.html',
  styleUrls: ['./save-btn.component.css']
})
export class SaveBtnComponent implements OnInit {
  isSave:boolean=false
  @Input() post :any
  @Input() userID :any
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    for(let i=0; i < this.post?.Favorites?.length; i++){
      if(this.post.Favorites[i].UserID==this.userID){
        this.isSave=true

      }else{
        this.isSave=false

      }
    }

  }

  save(){
    let data={
      user_id:this.userID,
      article_id:this.post.ID
    }

    this.http.addFavorite(data).subscribe(res=>{
      this.isSave=true

    },err=>{
  console.log(err)
    })
  }

  unSave(){

    let data={
      user_id:this.userID,
      article_id:this.post.ID
    }

    this.http.removeFavorite(data).subscribe(res=>{
      this.isSave=false
    },err=>{
  console.log(err)
    })
  }


}
