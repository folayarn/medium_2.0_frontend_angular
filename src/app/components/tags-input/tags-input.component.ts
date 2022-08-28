import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css']
})
export class TagsInputComponent implements OnInit {

  constructor(private http:HttpClient) { }

  @Output() arraytoreceived:EventEmitter<any>=new EventEmitter<any>();
 
  token:any =sessionStorage.getItem('tk')
   id:any =sessionStorage.getItem('tfd')
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.token,
      'Token': this.token
    })
  }
  ngOnInit(): void {
    this.arraytoreceived.emit(this.TagArray)
  }
  TagArray:Array<string>=[]
text="";
nodata=false
  Tagdata:any
  onChange(){
    const  url=`http://localhost:8000/api/v1/tags/search?q=${this.text}`;
    if(this.text.length >0){
    return this.http.get(url,this.httpOptions).subscribe((data:any)=>{
      this.Tagdata= data
      if(this.Tagdata.length <1){
        this.nodata=true

      }else{
        this.nodata=false

      }
    });

  }else{

   return this.Tagdata=[]

  }
}

onDelete(index:any){
    this.TagArray.splice(index,1);
 };


setData(name:any){
  if(this.TagArray.length<10){
  if(this.TagArray.includes(name)){
    this.Tagdata=[]
      this.text=''
  }else{
    this.TagArray.push(name);
    this.Tagdata=[]
    this.text=''
  }
}else{
  this.Tagdata=[]
  this.text=''
}
}
}
