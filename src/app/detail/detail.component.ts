import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ArticleclassService } from '../articleclass.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  art:ArticleclassService;

  affiche:boolean=false;

  constructor(private _articles:ArticlesService) { }
  
  ngOnInit() {
  this.art=this._articles.artdetaille;
  this.art.photo="../"+this.art.photo;
  this.affiche=true;
  }
  agarentie(a:boolean){
    if(a){
      return "oui";
    }else{
      return "non";
    }
  }



}
