import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { CardModule } from 'primeng/card';





@Component({
  selector: 'app-inicio',
  imports: [
    RouterLink,
    MenuBarComponent,
    CardModule,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})




export class InicioComponent {

  route = inject(  Router  );
  menuItens = [
    {
      id: '0',
      tittle: 'Catálogo de Itens',
      icon: 'pi pi-box',
      path: '/sistema/itens'
    },
    {
      id: '1',
      tittle: 'Lista de Categorias',
      icon: 'pi pi-folder',
      path: '/sistema/categorias'
    },
    {
      id: '2',
      tittle: 'Estoques',
      icon: 'pi pi-clipboard',
      path: '/sistema/estoques'
    },
  ]



  redirectPath(  path: string  ) {  this.route.navigate([  path  ])  }
}
