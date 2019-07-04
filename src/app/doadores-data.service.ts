import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoadoresDataService {

  constructor(private http: HttpClient) { }

  getDoadores(){
    return this.http.get('https://arqong.herokuapp.com/doadores');
  }
}
