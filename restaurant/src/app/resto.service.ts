import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //import the  Http client

@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';
  constructor(private http: HttpClient) {}
  //get all lists of restaurants
  getList() {
    return this.http.get(this.url);
  }
}
