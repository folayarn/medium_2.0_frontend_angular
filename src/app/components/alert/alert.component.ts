import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/state.reducer';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  error: any;
  text: any;

  constructor(private store:Store<State> ) {
    store.select('reducers').pipe().subscribe(
      (data:any) => {
  this.error=data.error;
  this.text=data.text;

      });
  }

  ngOnInit(): void {
  }


}


