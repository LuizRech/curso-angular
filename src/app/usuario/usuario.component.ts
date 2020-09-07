import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public listaUsuario:Usuario[];

  constructor(private UsuarioComponent:UsuarioService) { }

  ngOnInit(): void {
    this.listaUsuario = this.UsuarioComponent.listaUsuario();
  }

}
