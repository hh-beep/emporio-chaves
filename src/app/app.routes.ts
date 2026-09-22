import { Routes } from '@angular/router';

//  ~ Components
import {  HomeComponent  } from './view/home/home.component';
import {  ErrorComponent  } from './view/error/error.component';
import {  LoginComponent  } from './view/login/login.component';
import {  ContatoComponent  } from './view/contato/contato.component';
import {  SistemaComponent  } from './view/sistema/sistema.component';
import {  InicioComponent  } from './view/sistema/inicio/inicio.component';
import {  EditarItemComponent  } from './view/sistema/editar-item/editar-item.component';
import { CatalogoComponent } from './view/catalogo/catalogo.component';
import { ServicosComponent } from './view/servicos/servicos.component';
import { UsuarioComponent } from './view/sistema/usuario/usuario.component';
import { ItensComponent } from './view/sistema/itens/itens.component';
import { ItensAdicionarComponent } from './view/sistema/itens-adicionar/itens-adicionar.component';
import { CategoriasComponent } from './view/sistema/categorias/categorias.component';
import { CategoriasAdicionarComponent } from './view/sistema/categorias-adicionar/categorias-adicionar.component';
import { CategoriasEditarComponent } from './view/sistema/categorias-editar/categorias-editar.component';
import { UsuarioAdminComponent } from './view/sistema/usuario-admin/usuario-admin.component';
import { UsuarioAdminAdicionarComponent } from './view/sistema/usuario-admin-adicionar/usuario-admin-adicionar.component';
import { UsuarioAdminEditarComponent } from './view/sistema/usuario-admin-editar/usuario-admin-editar.component';







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
    path: 'servicos',
    component: ServicosComponent
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




      //  ~ Itens
      {
        path: 'itens',
        component: ItensComponent
      },
      {
        path: 'itens/adicionar',
        component: ItensAdicionarComponent
      },
      {
        path: 'itens/editar/:id',
        component: EditarItemComponent
      },



      //  ~ Categorias
      {
        path: 'categorias',
        component: CategoriasComponent
      },
      {
        path: 'categorias/adicionar',
        component: CategoriasAdicionarComponent,
      },
      {
        path: 'categorias/editar/:id',
        component: CategoriasEditarComponent
      },



      //  ~ usuario (+ admin)
      {
        path: 'usuario',
        component: UsuarioComponent
      },
      {
        path: 'usuario/admin',
        component: UsuarioAdminComponent
      },
      {
        path: 'usuario/admin/adicionar',
        component: UsuarioAdminAdicionarComponent
      },
      {
        path: 'usuario/admin/editar/:id',
        component: UsuarioAdminEditarComponent
      },



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

