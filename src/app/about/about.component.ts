import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public texto:string;

  public usuario:Usuario;

  public lista:Usuario[];
  
  constructor(private UsuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.texto = "About Page"; //Property bind, onde no html pode ser recuperado com os {{}}

    this.usuario = this.UsuarioService.getUsuario();

    this.lista = this.UsuarioService.listaUsuario();
  }

  clicou(){
    this.texto="Clicou no button"
  }

}
