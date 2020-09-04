import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public texto:string;

  constructor() { }

  ngOnInit(): void {
    this.texto = "Estamos na Home page, clique no botao";
  }

  clicou(){
    this.texto = "Estamos na Home page, voce clicou no botao";
  }

}
