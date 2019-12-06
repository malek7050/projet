import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ArticleclassService } from '../articleclass.service';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  articles=[];
  title="modifier Article :";
  mrq="";
  ident="";
  libel="";
  phot="";
  prix:number;
  dat:Date=new Date("1999-01-01");
  gar:boolean=false;
  message:string;
  login:boolean=false;

  focus:ArticleclassService;
  constructor(private _articles:ArticlesService) { }
  ngOnInit() { this.focus=this._articles.changer;
     }

  verif(){ this.focus.libelle=this.libel;
    this.focus.date=this.dat;
    this.focus.garantie=this.gar;
    this.focus.prix=this.prix;
    this.focus.identifiant=this.ident;
    this.focus.prix=this.prix;
    this.focus.photo=this.phot;
    this.message="Cette modification a ete effectué"
                        
    }
    
    
    
    
    
    
    
                            }  



