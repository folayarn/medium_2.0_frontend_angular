import { Component, Input, OnInit } from '@angular/core';
import Quill from 'quill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import BlotFormatter from 'quill-blot-formatter';
import { map } from 'rxjs/operators'



Quill.register('modules/blotFormatter', BlotFormatter);


import 'quill-emoji/dist/quill-emoji.js'
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  modules={}
  selectedFile:any;
  constructor(private http:HttpClient) {

    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': true,
      'emoji-toolbar': true,
      blotFormatter: {
        // empty object for default behaviour.
      },
      syntax: true,
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6,false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],

        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video'],
        ['emoji'],                         // link and image, video
      ],



    };

  }


  ngOnInit(): void {
  }
image:any

form=new FormGroup({
  title:new FormControl(''),
  editor:new FormControl(''),
 category:new FormControl(''),
  description:new FormControl(''),

})

onFileChange(event:any){
  this.selectedFile=event.target.files[0]

}
data:any
items:[]=[]
tags:any
text='Publish'
getTags(event:any){
this.tags=event
console.log(this.tags)
}

 onPublish(){
 text="Publishing..."
  const fd=new FormData()
  fd.append('file',this.selectedFile)
  fd.append('upload_preset','spiy0dwb')
  this.http.post('https://api.cloudinary.com/v1_1/footepl/image/upload',fd).subscribe(res=>{
    this.image=res
 this.data={
  title:this.form.get('title')!.value,
  body:this.form.get('editor')!.value,
 category:this.tags,
  description:this.form.get('description')!.value,
  image:this.image.url

  
 }


 })
}







}
