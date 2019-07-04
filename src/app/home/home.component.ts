import { Component, OnInit } from '@angular/core';
import { OngDataService } from '../ong-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style:boolean = false;

  ongs: Object;

  constructor(private ongsData: OngDataService) { }

  ngOnInit() {
    this.ongsData.getOngs().subscribe(data =>
      { 
        this.ongs = data
        console.log(data)
      
      }
    )

  }

}
