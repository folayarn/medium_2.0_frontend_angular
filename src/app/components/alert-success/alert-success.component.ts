import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/state.reducer';
import { setSuccess, setText } from '../../store/state.actions'


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

  hide(){
    this.store.dispatch(setSuccess({ success: false }));
    this.store.dispatch(setText({ text: '' }));
  }
}
