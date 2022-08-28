import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  constructor(private HttpService:HttpService) { }

  ngOnInit(): void {
  }

  form=new FormGroup({
title:new FormControl(''),
body:new FormControl(''),
userId:new FormControl('1')
  })

onSubmit(): void {
this.HttpService.createPost(this.form.value).subscribe(response => {
console.log(response)
})

}

}
