import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.css']
})
export class LikeBtnComponent implements OnInit {
  isLiked:boolean=false
  @Input() post :any
  @Input() userID :any
  countLikes:number=0

  constructor(private http:HttpService) { }



  ngOnInit(): void {

    for(let i=0; i < this.post?.Loves?.length; i++){
      if(this.post.Loves[i].UserID==this.userID){
        this.isLiked=true
        this.loadLikes()
      }else{
        this.isLiked=false
        this.loadLikes()
      }
    }
  }

  loadLikes(){
    let data={
      user_id:this.userID,
      article_id:this.post.ID
    }

    this.http.getlikes(data).subscribe(res=>{
      this.countLikes=res.length
    },err=>{
      console.log(err)
    })
  }

  like(){

    let data={
      user_id:this.userID,
      article_id:this.post.ID
    }

    this.http.like(data).subscribe(res=>{
      this.isLiked=true
      this.loadLikes()
    },err=>{
  console.log(err)
    })
  }

  unlike(){

    let data={
      user_id:this.userID,
      article_id:this.post.ID
    }

    this.http.unlike(data).subscribe(res=>{
      this.isLiked=false
      this.loadLikes()
    },err=>{
  console.log(err)
    })
  }

}
