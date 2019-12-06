import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ArticleclassService } from '../articleclass.service';
import { LoginInfoService } from '../login-info.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  articles=[];
  title="Ajouter Article :";
  mrq="";
  ident="";
  libel="";
  phot="";
  prix:number=0;
  dat:Date=new Date("1999-01-01");
  gar:boolean=false;
  message:string;
  login:boolean=false;
  accounts=[];
  samsung1=[];
  xiaomi1=[];
  huawei1=[];
  apples1=[];
  submitted:boolean = false;

  constructor(private _articles:ArticlesService, private _loginInfoService:LoginInfoService) { }

  ngOnInit() {this.login=this._loginInfoService.login;
    this.accounts=this._loginInfoService.getAccounts();
    this.articles=this._articles.articles;

    this.apples1=this._articles.apples;
    this.huawei1=this._articles.huawei;
    this.samsung1=this._articles.samsung;
    this.xiaomi1=this._articles.xiaomi;
  }
  add(){
    this.articles.push(this.art);
  }
  addsamsung(){
    this.samsung1.push(this.art);
  }
  addxiaomi(){
    this.xiaomi1.push(this.art);
  }
  addhuawei(){
    this.huawei1.push(this.art);
  }
  addapples(){
    this.apples1.push(this.art);
  }
  public art:ArticleclassService;
  onSubmit(f:NgForm){
    this.submitted=true;
  if(this.ident!="" && this.libel!=""&& this.phot!=""&& this.prix!=0){
  this.art=new ArticleclassService(this.ident,this.libel,this.phot,this.prix,this.gar,this.dat );
  
  if(this.mrq=="apple"){this.addapples();this.add();}
  if(this.mrq=="huawei"){this.addhuawei();this.add();}
  if(this.mrq=="xiaomi"){this.addxiaomi();this.add();}
  if(this.mrq=="samsung"){this.addsamsung();this.add();}
  this.message="l'article a ete ajouter !";
  }else{
    this.message="l'identifiant de l'article est deja existe ou il ya un champ vide !";
  }


}



}
