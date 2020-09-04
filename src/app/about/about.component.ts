import { Component, OnInit } from '@angular/core';
import { About } from '../about';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public texto:string;

  public about:About;
  
  constructor(private AboutService:AboutService) { }

  ngOnInit(): void {
    this.texto = "About Page"; //Property bind, onde no html pode ser recuperado com os {{}}

    this.about = this.AboutService.getAbout();
  }

  clicou(){
    this.texto="Clicou no button"
  }

}
