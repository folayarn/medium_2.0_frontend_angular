import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  data:any;
  constructor(private HttpService:HttpService){}
  ngOnInit():void{
this.HttpService.getPost().subscribe((res)=>{

this.data=res
})
  }

}
