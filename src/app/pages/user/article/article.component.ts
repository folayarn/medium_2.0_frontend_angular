import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@Input() id!:string

dataData:any
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getUserPost(this.id).subscribe(response => {
      this.dataData=response

          },err=>{

            console.log(err)
          })

  }

}
