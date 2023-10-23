import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyDataService {
  private _URL = 'https://dummyjson.com/products';


  constructor(private http: HttpClient) {}


  get(){
    return this.http.get(this._URL);
  }
  
}
