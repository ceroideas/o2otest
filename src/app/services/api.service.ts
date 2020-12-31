import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://api.punkapi.com/v2/beers";

  constructor(public http: HttpClient) { }

  getResults(criterial){
    return this.http.get(this.url+'?food='+criterial);
  }

}
