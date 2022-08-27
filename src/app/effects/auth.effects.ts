import { login } from './../store/state.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, concatMap } from 'rxjs/operators';
//import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthEffects{

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    concatMap(action =>
     this.http.login(action.credentials)
      .pipe(
        map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
        catchError(() => EMPTY)
      )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private http: AuthService
  ) {}
}
