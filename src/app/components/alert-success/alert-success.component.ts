import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/state.reducer';

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.css']
})
export class AlertSuccessComponent implements OnInit {
  success: any
  text: any;

  constructor(private store:Store<State>) {
    store.select('reducers').pipe().subscribe(
      (data:any) => {
  this.success=data.success;
  this.text=data.text;
      });

  }

  ngOnInit(): void {
  }

}
