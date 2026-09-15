import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { loginResponseModel } from '../../../../models/loginResponse.model';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';




@Component({
  selector: 'app-menu-bar',
  imports: [
    MenuModule,
    DividerModule,
    ButtonModule
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})




export class MenuBarComponent implements OnInit {


  private router = inject(  Router  );


  linkPaths: MenuItem[] = [
    {  id: '0', label: 'Inicio', routerLink: '/sistema/inicio', icon: 'pi pi-bars'  },
    {  id: '1', label: 'Ver Itens', routerLink: '/sistema/itens', icon: 'pi pi-plus'  },
    {  id :'2', label: 'Categorias', routerLink: '/sistema/categorias', icon: 'pi pi-folder'}
  ]

  getUser?: string | null = localStorage.getItem('loginUser');
  userInfos?: loginResponseModel;




  ngOnInit(): void {
      if (  this.getUser != null  ) {
        this.userInfos = JSON.parse(  this.getUser  );
      }
  }





  navigatePath(  path: string  ) {
    this.router.navigate(  [path]  );
  }
}
