
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/services/http.service';
import { setUser } from '../../store/state.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpService, private store: Store) { }

  jsonData:any
  ngOnInit(): void {

    this.http.fetchUser().subscribe(response => {
this.jsonData=response
this.store.dispatch(setUser({ user: this.jsonData }));
    },err=>{

      console.log(err)
    })

  }

}
