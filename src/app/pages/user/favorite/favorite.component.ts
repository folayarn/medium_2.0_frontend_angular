import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
@Input() data:any

post:any
  constructor(private http :HttpService) { }

  ngOnInit(): void {
this.http.getFavorite().subscribe(res=>{
this.post=res
console.log(this.post)
},err=>{console.log(err)})
  }

}
