import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario.component';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario = new Usuario();

  constructor() { }
  
  ngOnInit(): void {
    console.log("cai aqui");
  }

  public salvar(){
    console.log(this.usuario);
    alert("Salvo com sucesso");
  }
}
