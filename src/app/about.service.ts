import { Injectable } from '@angular/core';
import { About } from './about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  public getAbout(): About{
      let about = new About;

      about.nome = "Luiz";
      about.email = "luiz@gmail.com";

      return about;
  }
}
