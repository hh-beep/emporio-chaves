import { Component } from '@angular/core';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';



@Component({
  selector: 'app-categorias',
  imports: [
    MenuBarComponent,
    ButtonModule,
    AsyncPipe,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss',
  providers: [  ConfirmationService, MessageService  ]  //  ~ Provedores locais dos modulos
})





//  ~ Este Component daqui é semelhante ao do Itens, entt só vou adaptar os campos e talz
export class CategoriasComponent {




}
