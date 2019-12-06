import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleclassService {

  // Déclaration des attributs
  private _identifiant: string;
  private _libelle: string;
  private _photo: string;
  private _prix: number;
  private _garantie : boolean;
  private _date:Date;
  
  // Définition du constructeur
  constructor(identifiant: string,libelle:string,photo:string,prix: number,garantie:boolean,date:Date)
  {
  this._identifiant = identifiant;
  this._libelle=libelle;
  this._photo="assets/"+photo;
  this._prix = prix;
  this._garantie = garantie;
  this._date=date;
  }
        public get identifiant(): string {
          return this._identifiant;
          }
          public set identifiant(value: string) {
          this._identifiant = value;
          }
  
          public get libelle(): string {
            return this._libelle;
            }
            public set libelle(value: string) {
            this._libelle = value;
            }
  
  
            public get photo(): string {
              return this._photo;
              }
              public set photo(value: string) {
              this._photo = value;
              }
  
        public get prix(): number {
          return this._prix;
          }
          public set prix(value: number) {
          this._prix = value;
          }
  
  
        public get garantie(): boolean {
            return this._garantie;
            }
            public set garantie(value: boolean) {
            this._garantie = value;
            }
            
  
  
            public get date(): Date {
              return this._date;
              }
              public set date(value: Date) {
              this._date = value;
              }
  }
