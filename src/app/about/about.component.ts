import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public texto:string;
  constructor() { }

  ngOnInit(): void {
    this.texto = "About Page"; //Property bind, onde no html pode ser recuperado com os {{}}
  }

  clicou(){
    this.texto="Clicou no button"
  }

}
