import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OngDataService } from '../ong-data.service';
import { DoadoresDataService } from "../doadores-data.service";
import { LivrosDataService } from '../livros-data.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  ongs: Object;
  doadores: Object;

  constructor( private formBuilder: FormBuilder, private ongsData: OngDataService, private doadoresData: DoadoresDataService, private livrosData: LivrosDataService ) { 
    this.messageForm = this.formBuilder.group({
      nome: ['', Validators.required],
      anoFabricacao: ['', Validators.required],
      editora: ['', Validators.required],
      autor: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;

    if(this.messageForm.invalid){
      return;

    }

    this.success = true;
    
  }
  addLivro(nome, anoFabricacao, editora,autor,daodor,ong){
    this.livrosData.addLivro(nome, anoFabricacao, editora,autor,daodor,ong);
  }
  

  ngOnInit() {
    this.doadoresData.getDoadores().subscribe(data =>
      { 
        this.doadores = data
        console.log(data)
      
      }
    )
    this.ongsData.getOngs().subscribe(data =>
      { 
        this.ongs = data
        console.log(data)
      
      }
    )
  }
  

}
