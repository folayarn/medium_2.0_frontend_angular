import { createAction ,props} from '@ngrx/store';


export const setLoading=createAction('[Loading] Set_Loading',props<{loading:boolean}>())
export const setError=createAction('[Error] Set_Error',props<{error:boolean}>())
export const setSuccess=createAction('[Success] Set_Success',props<{success:boolean}>())
export const setText=createAction('[Text] Set_Text',props<{text:string}>())
