import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
      let usuario = new Usuario;

      usuario.nome = "Luiz";
      usuario.email = "luiz@gmail.com";

      return usuario;
  }

  public listaUsuario(): Usuario[]{
    return [
      {
        nome: "Luiz",
        email: "luiz@gmail.com"
      },
      {
        nome: "Maria",
        email: "maria@gmail.com"
      },
      {
        nome: "José",
        email: "jose@gmail.com"
      },
      {
        nome: "Ana",
        email: "ana@gmail.com"
      },
    ]
  }
}
