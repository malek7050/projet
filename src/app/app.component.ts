import { Component } from '@angular/core';
import { LoginInfoService } from './login-info.service';
import { ArticlesService } from './articles.service';
import { ArticleclassService } from './articleclass.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenu  chez Electro';

  constructor(private _loginInfoService:LoginInfoService,private _articles:ArticlesService){

  }
  search1="";
  ngOnInit(){
  this.log=this._loginInfoService.login;
  this._articles.search=this.search1;
  }
  rechercher(){ this._articles.search=this.search1;}
  log:boolean; 

}