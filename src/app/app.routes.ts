import { Routes } from '@angular/router';

//  ~ Components
import {  HomeComponent  } from './view/home/home.component';
import {  ErrorComponent  } from './view/error/error.component';
import {  LoginComponent  } from './view/login/login.component';
import {  ContatoComponent  } from './view/contato/contato.component';
import {  SistemaComponent  } from './view/sistema/sistema.component';
import {  InicioComponent  } from './view/sistema/inicio/inicio.component';
import {  AdicionarItemComponent  } from './view/sistema/adicionar-item/adicionar-item.component';
import {  EditarItemComponent  } from './view/sistema/editar-item/editar-item.component';
import { CatalogoComponent } from './view/catalogo/catalogo.component';



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
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },




  {
    path: 'sistema',
    //  ~ Por algum motivo, usar o component aqui pode gerar um erro, pelos componentes serem standalones e essas paradas
    //  ~ Se der erro, tem que usar o metodo de loadComponent dai
    //loadComponent: () => import(),
    component: SistemaComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'adicionar-item',
        component: AdicionarItemComponent
      },
      {
        path: 'editar-item/:id',
        component: EditarItemComponent
      }
    ]
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

