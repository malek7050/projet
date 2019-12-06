import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { LoginInfoService } from '../login-info.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private _loginInfoService:LoginInfoService) { }
  accounts=[];
  ngOnInit() {
    this.login=this._loginInfoService.login;
    this.accounts=this._loginInfoService.getAccounts();
  }

login:boolean=false;
title="authentification";
username:string="";
password:string="";
email:string="";

onSubmit(f:NgForm){
for (var i = 0; i < this.accounts.length; i++) {
  if(this.username == this.accounts[i].username && this.password == this.accounts[i].password )
  {
    this._loginInfoService.login=true;
    this.login=true;
    this._loginInfoService.username=this.username;
  }
}
}
logout(){ this._loginInfoService.login=false;
  this.login=false;
  this._loginInfoService.username="";}
}
