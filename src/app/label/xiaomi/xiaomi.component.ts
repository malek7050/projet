import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../articles.service';
import { ArticleclassService } from '../../articleclass.service';
@Component({
  selector: 'app-xiaomi',
  templateUrl: './xiaomi.component.html',
  styleUrls: ['./xiaomi.component.css']
})
export class XiaomiComponent implements OnInit {
  articles=[];
  allarticles=[];

  constructor(private _articles:ArticlesService) { }

  ngOnInit() { this.articles=this._articles.huawei;
    this.allarticles=this._articles.articles;
  }

  articleDetaille(a:ArticleclassService)
  {
    this._articles.artdetaille=a;

  }
  modifier(a:ArticleclassService)
  {
    this._articles.changer=a;

  }
  i:number;
  supprimer(a:ArticleclassService)
  {
    for( this.i=0;this.i<this.articles.length;this.i++)
{
if(this.articles[this.i].identifiant == a.identifiant ){
  this.articles.splice(this.i, 1);
  this.allarticles.splice(this.i, 1);
}
    
  }

} 
}
