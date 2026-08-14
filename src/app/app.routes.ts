import { Routes } from '@angular/router';

//  ~ Components
import {  HomeComponent  } from './view/home/home.component';
import {  ErrorComponent  } from './view/error/error.component';
import {  SistemaComponent  } from './view/sistema/sistema.component';
import {  LoginComponent  } from './view/login/login.component';
import {  ContatoComponent  } from './view/contato/contato.component';


export const routes: Routes = [
  { //  ~ Homepage
    path: 'home',
    component: HomeComponent
  },
  { //  ~ Redirect para a pagina Home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },




  {
    path: "contato",
    component: ContatoComponent
  },







  {
    path: 'login',
    component: LoginComponent
  },


  {
    path: 'sistema',
    component: SistemaComponent
  },









  { //  ~ Pagina de redirect de Erro
    path: '**',
    redirectTo: 'error/404'
  },
  {
    path: 'error/:errorCode',
    component: ErrorComponent
  }
];

