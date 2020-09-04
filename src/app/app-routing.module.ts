import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes:Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent}
  // {path: '', pathMatch: 'full', redirectTo: '/home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
