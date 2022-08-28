import { createReducer, on } from '@ngrx/store';
import { setError, setLoading, setSuccess,setText,setUser,setpostID,setType } from './state.actions';

export interface State{
  reducers:AppState
}
export interface AppState{
  loading:boolean,
  error:boolean,
  success:boolean,
  text:string,
  likes:any,
  user:any,
  types:string,
  postID:number

}
 const initialState :AppState= {
  loading:false,
  error:false,
  success:false,
  text:'',
  postID:0,
  user:{},
  likes:[],
  types:''
};

 export const dataReducer = createReducer(
  initialState,
  on(setLoading,(state,action:any)=>({
    ...state,loading:action.loading
  })),
  on(setSuccess,(state,action:any)=>({
    ...state,success:action.success
  })),
  on(setError,(state,action:any)=>({
    ...state,error:action.error
  })),
  on(setText,(state,action:any)=>({
    ...state,text:action.text
  })),
  on(setUser,(state,action:any)=>({
    ...state,user:action.user
  })),
  on(setpostID,(state,action:any)=>({
    ...state,postID:action.id
  })),
  on(setType,(state,action:any)=>({
    ...state,types:action.types
  }))

);


