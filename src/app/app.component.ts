import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/state.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loading:any;
 constructor(private store:Store<State> ){


  store.select('reducers').pipe().subscribe(
    (data:any) => {
    this.loading=data.loading
    });
 }

  ngOnInit(): void {


  }



}
