import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JeuDeCarteDeftApiService {

  // variables
  private _url : string = "https://www.superheroapi.com/api/";
  private _token : string = "10227629316945584";

  // propriétés (get set)
  private get _basic_url(): string { return `${this._url}${this._token}/`;}

  // constructeur 
  constructor(private _http:HttpClient) { }

  // méthodes
}
