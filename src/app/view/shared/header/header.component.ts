import {  Component, inject, OnInit  } from '@angular/core';
import {  Router  } from '@angular/router';
import { MenuItem } from 'primeng/api';

//  ~ PrimeNG modules
import {  MenubarModule  } from "primeng/menubar";



@Component({
  selector: 'app-header',
  imports: [
    MenubarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



export class HeaderComponent  {

  private router = inject(  Router  );
  links: MenuItem[] = [
      {
        routerLink: '/home',
        label: 'Página Inicial',
        //  ~ Icones não estão funcionando no momento, nn sei o por que...
        //  ~ Vou deixar meu comentario acima por ter sido burro por nn ter instalado o pacote dos icones
        icon: 'pi pi-home',
        iconClass: 'pi pi-home',
      },
      {
        label: 'Catálogo',
        icon: 'pi pi-list',
        items: [
          {
            routerLink: '/catalogo',
            label: 'Produtos',
            icon: 'pi pi-key',
          },
          {
            routerLink: '/servicos',
            label: 'Nossos serviços',
            icon: 'pi pi-hammer'
          }
        ]
      },
      {
        routerLink: '/contato',
        label: 'Contatos',
        icon: 'pi pi-phone'
      },
      {
        routerLink: '/login',
        label: 'Login',
        icon: 'pi pi-user'
      },
    ]


  navigatePath(  path: string ) {
    console.log(  path  )

    this.router.navigate(  [path]  );

  }
}
