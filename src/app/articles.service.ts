import { Injectable } from '@angular/core';
import { ArticleclassService } from './articleclass.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }
artdetaille:ArticleclassService;
changer:ArticleclassService;
supprimer:ArticleclassService;
search:string="";

  public art1=new ArticleclassService("article 1","Smartphone SAMSUNG Galaxy Note 10+","s1.jpg",3899  ,true,new Date("2019-01-10") );
  public art2=new ArticleclassService("article 2","Smartphone SAMSUNG Galaxy S10+","s2.jpg",4199,true,new Date("2019-02-22"));
  public art3=new ArticleclassService("article 3","Smartphone SAMSUNG Galaxy A70","s3.jpg",1520,true,new Date("2019-04-17"));
  public art4=new ArticleclassService("article 4","Smartphone SAMSUNG Galaxy A50","s4.jpg",2695,true,new Date("2019-07-14"));
  public art5=new ArticleclassService("article 5","Smartphone SAMSUNG Galaxy A80","s5.jpg",2500,true,new Date("2019-01-22"));
 
 
  public art6=new ArticleclassService("article 6","Apple iPhone 8 Plus 256Go - Gold","a1.jpg",3899  ,true,new Date("2019-01-10") );
  public art7=new ArticleclassService("article 7","Apple iPhone X 256Go 4G - Silver","a2.jpg",4199,true,new Date("2019-02-22"));
  public art8=new ArticleclassService("article 8","Apple iPhone XS Max 64Go 4G","a3.jpg",2600,true,new Date("2019-01-04"));
  public art9=new ArticleclassService("article 9","Apple iPhone 7 32 Go - Silver","a4.jpg",3505,true,new Date("2019-06-05"));

  public art10=new ArticleclassService("article 10","Smartphone REDMI Note 7 - Noir (REDMI-N7-BLACK-128G)","x1.jpg",900  ,true,new Date("2019-01-10") );
  public art11=new ArticleclassService("article 11","Smartphone XIAOMI Redmi 5A 4G Gold","x2.jpg",800,true,new Date("2019-07-22"));
  public art12=new ArticleclassService("article 12","Smartphone XIAOMI Redmi 7A 4G Bleu","x3.jpg",1600,true,new Date("2019-08-10"));
  public art13=new ArticleclassService("article 13","Smartphone XIAOMI Redmi GO 4G Bleu","x4.jpg",1200,true,new Date("2019-03-10"));


  public art14=new ArticleclassService("article 14","Smartphone HUAWEI P30 Pro - Cristal","h1.jpg",1400  ,true,new Date("2019-04-06") );
  public art15=new ArticleclassService("article 15","Smartphone HUAWEI Y9 Prime 2019 - Noir","h2.jpg",956,true,new Date("2019-08-25"));
  public art16=new ArticleclassService("article 16","Smartphone HUAWEI Y7 Prime 2019 4G Noir ","h3.jpg",698,true,new Date("2019-09-14"));
  public art17=new ArticleclassService("article 17","Smartphone HUAWEI Y6 Prime 2019 - Bleu","h4.jpg",759,true,new Date("2019-05-10"));
  
  //public art5=new ArticleclassService("article 5","Smartphone SAMSUNG Galaxy A80","s5.jpg",2500,true,new Date("2011-01-10"));
  
  
  
  public samsung=[
    this.art1,
    this.art2    ,
    this.art3,
    this.art4,
    this.art5
  ]
  public apples=[
   
    this.art6,
    this.art7,
    this.art8,
    this.art9,
  
  ]
  public huawei=[
    this.art14,
    this.art15,
    this.art16,
    this.art17,
  ]
  public xiaomi=[
    this.art10,
    this.art11,
    this.art12,
    this.art13,
  ]
  public articles=[
    this.art1,
    this.art2, 
    this.art3,
    this.art4,
    this.art5,
    this.art6,
    this.art7,
    this.art8,
    this.art9,
    this.art10,
    this.art11,
    this.art12,
    this.art13,
    this.art14,
    this.art15,
    this.art16,
    this.art17
    
  ]
}

