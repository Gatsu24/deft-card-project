import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JeuDeCarteDeftApiService {

  private _url : string = "https://www.superheroapi.com/api/";
  private _token : string = "10227629316945584";

  constructor(private _http:HttpClient) { }
  private get _basic_url(): string { return `${this._url}${this._token}/`; }
}
