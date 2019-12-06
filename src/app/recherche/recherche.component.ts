import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ArticleclassService } from '../articleclass.service';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
title="rechercher un article :";
articles=[];
resultat=[];

libel="";
prix:number=0;

 look:boolean=false;
  constructor(private _articles:ArticlesService) { }
  search1:string;
  ngOnInit() {this.search1=this._articles.search;
    this.articles=this._articles.articles;
    this.libel=this._articles.search;

  }
  i:number;
rechercher(){
  this.look=true;
for( this.i=0;this.i<this.articles.length;this.i++)
{
if(this.articles[this.i].libelle == this.libel && this.articles[this.i].prix <= this.prix){
  this.resultat.push(this.articles[this.i]);
  console.log("find one !")
}
}  

}
articleDetaille(a:ArticleclassService)
  {
    this._articles.artdetaille=a;

  }


Vide(){
  return this.resultat.length > 0;
}
reset(){
  this.resultat=[];
  this.look=false;
}


}
