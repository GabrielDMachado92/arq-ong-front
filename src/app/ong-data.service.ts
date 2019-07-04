import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OngDataService {

  constructor(private http: HttpClient) { }
  
  getOngs(){
    return this.http.get('https://arqong.herokuapp.com/ongs');
  }
}
