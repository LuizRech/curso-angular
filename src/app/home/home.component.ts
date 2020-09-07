import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public texto:string;
  public usuario:Usuario;

  constructor(private UsuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.texto = "Estamos na Home page, clique no botao";
    this.usuario = this.UsuarioService.getUsuario();
  }

  clicou(){
    this.texto = "Estamos na Home page, voce clicou no botao";
  }

}
