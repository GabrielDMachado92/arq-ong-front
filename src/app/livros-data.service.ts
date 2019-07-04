import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Doador } from 'src/objects/Doador';
import { Ong } from 'src/objects/Ong';

@Injectable({
  providedIn: 'root'
})
export class LivrosDataService {

  uri = 'https://arqong.herokuapp.com/livros';

  constructor(private http: HttpClient) { }

  getLivros(){
    return this.http.get(`${this.uri}`);
  }

   addLivro(nome: string, anoFabricacao: BigInteger, editora: string,autor: string,daodor: Doador,ong: Ong) {
    const obj = {
      nome,
      anoFabricacao,
      editora,
      autor,
      daodor,
      ong
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }

}
