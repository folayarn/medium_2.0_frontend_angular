

 export function setStorage(id:any,token:any,role:any):void{
    sessionStorage.setItem('tk', token)
    sessionStorage.setItem('tfd', id)
    sessionStorage.setItem('rx', role)
  }

export function notMatch(pass:string,c_pass:string):boolean{

  if(pass !==c_pass){
    return false
      }else{
      return true
      }
}
export function isAdmin():boolean{

if(sessionStorage.getItem('rx')==='admin'){
  return true
}else{
  return false
}
}
