import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginInfoService {
login:boolean=false;
username:string="";


  constructor() { }
getAccounts(){
 return [{username:"malek",password:"dahmeni",email:"malek@gmail.com"},
       {username:"aziz",password:"cherif",email:"aziz@gmail.com"}
 ]
}
}
