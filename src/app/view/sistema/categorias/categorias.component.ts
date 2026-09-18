import { Component, inject, OnInit } from '@angular/core';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CategoriasService } from '../../../service/categorias.service';
import { tap } from 'rxjs';



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
export class CategoriasComponent implements OnInit  {


  //  ~ Injects Principais do Sistema..
  private service = inject(  CategoriasService  );
  private router = inject(  Router  );
  private confirmationService = inject(  ConfirmationService  );      //  ~ O modulo Confirmation cria a box principal..
  private messageService = inject(  MessageService  );                //  ~ Este modulo cria o "Alert" de canto da pagina...


  listaCategorias$ = this.service.pegarCategorias();







  ngOnInit(): void {

  }



  adicionarCategoria() {  this.router.navigate(  ['/sistema/categorias/adicionar']  );  }
  editarCategoria(  idItem: number  ) {  this.router.navigate(  [`/sistema/categorias/editar/${  idItem  }`]  );  }



  deletarCategoria(  idCategoria: number  ) {

    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir esta categoria?',
      header: 'Confirmação de Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      accept: () => {

        //  ~ O pipe aqui serve para atualizar a lista após deletar, chamando o tap pra recarregar...
        this.service.deletarCategoria(  idCategoria  ).pipe(
          //  ~ O tap pra realizarmos ações quando houver o delete
          tap(  () => {

            this.listaCategorias$ = this.service.pegarCategorias();     //  ~ Atualizamos as categorias...

            //  ~ Mensagemzinha
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Categoria removido com sucesso'
            });


          }),
        ).subscribe()       //  ~ ele me deu um errinho pq esqueci o subscribe..L.
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Cancelado',
          detail: 'Exclusão cancelada'
        });
      }
    });
  }
}
