import { Component, OnInit } from '@angular/core';
import { About } from '../about';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public texto:string;
  public about:About;

  constructor(private AboutService:AboutService) { }

  ngOnInit(): void {
    this.texto = "Estamos na Home page, clique no botao";
    this.about = this.AboutService.getAbout();
  }

  clicou(){
    this.texto = "Estamos na Home page, voce clicou no botao";
  }

}
