import { Component, OnInit } from '@angular/core';
import { LivrosDataService } from "../livros-data.service";

@Component({
  selector: 'app-list-livros',
  templateUrl: './list-livros.component.html',
  styleUrls: ['./list-livros.component.scss']
})
export class ListLivrosComponent implements OnInit {

  livros: Object;

  constructor(private livrosData: LivrosDataService) { }

  ngOnInit() {
    this.livrosData.getLivros().subscribe(data =>
      { 
        this.livros = data
        console.log(data)
      
      }
    )
  }

}
