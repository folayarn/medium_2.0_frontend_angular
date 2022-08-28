import { FormGroup } from '@angular/forms';
import { createAction ,props} from '@ngrx/store';


export const setLoading=createAction('[Loading] Set_Loading',props<{loading:boolean}>())
export const setError=createAction('[Error] Set_Error',props<{error:boolean}>())
export const setSuccess=createAction('[Success] Set_Success',props<{success:boolean}>())
export const setText=createAction('[Text] Set_Text',props<{text:string}>())
export const setUser=createAction('[Text] Set_User',props<{user:any}>())
export const setpostID=createAction('[Text] Set_PostID',props<{id:number}>())
 export const setType=createAction('[Text] Set_Type',props<{types:string}>())

 //effects action

 export const loadUser=createAction('[Load] Load_User')
 export const login=createAction('[Login] Login_User',props<{ credentials: FormGroup }>())
