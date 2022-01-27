
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpService) { }

  jsonData:any
  ngOnInit(): void {

    this.http.fetchUser().subscribe(response => {
this.jsonData=response

    })

  }

}
