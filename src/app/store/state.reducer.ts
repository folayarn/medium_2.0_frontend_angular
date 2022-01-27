import { createReducer, on } from '@ngrx/store';
import { setError, setLoading, setSuccess,setText } from './state.actions';

export interface State{
  reducers:AppState
}
export interface AppState{
  loading:boolean,
  error:boolean,
  success:boolean,
  text:string,

}
 const initialState :AppState= {
  loading:false,
  error:false,
  success:false,
  text:''
};

 export const dataReducer = createReducer(
  initialState,
  on(setLoading,(state,action)=>({
    ...state,loading:action.loading
  })),
  on(setSuccess,(state,action)=>({
    ...state,success:action.success
  })),
  on(setError,(state,action)=>({
    ...state,error:action.error
  })),
  on(setText,(state,action)=>({
    ...state,text:action.text
  }))

);


