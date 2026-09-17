import { Component, inject, OnInit } from '@angular/core';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { ItensService } from '../../../service/itens.service';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

//  ~ Para a mensagem de Confirmação de Delete
import {  ConfirmDialogModule  } from "primeng/confirmdialog";
import {  ConfirmationService, MessageService  } from "primeng/api";
import {  ToastModule } from "primeng/toast";
import { tap } from 'rxjs';





@Component({
  selector: 'app-itens',
  imports: [
    MenuBarComponent,
    ButtonModule,
    AsyncPipe,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss',
  providers: [  ConfirmationService, MessageService  ]  //  ~ Provedores locais dos modulos
})




export class ItensComponent implements OnInit {

  //  ~ Injects Principais do Sistema..
  private service = inject(  ItensService  );
  private router = inject(  Router  );
  private confirmationService = inject(  ConfirmationService  );      //  ~ O modulo Confirmation cria a box principal..
  private messageService = inject(  MessageService  );                //  ~ Este modulo cria o "Alert" de canto da pagina...


  listaItens$ = this.service.listarItens();



  //  ~ nn lembro oqq ia fdazer com isso aq
  ngOnInit(): void {}




  adicionarItem() {
    this.router.navigate(  ['/sistema/itens/adicionar']  );
  }


  editarItem(  path: string, itemId: number ) {
    this.router.navigate(  [`${path}/${itemId}`]  );
  }





  //  ~ Metodo DeletarItem, com popup de Mensagem de Confirmação
  deletarItem(itemId: number) {


    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este item?',
      header: 'Confirmação de Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      accept: () => {
        //  ~ O pipe aqui serve para atualizar a lista após deletar, chamando o tap pra recarregar...
        this.service.deletarItemPorId(itemId).pipe(
          tap(() => {
            // Recarrega a lista observável após o sucesso
            this.listaItens$ = this.service.listarItens();
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Item removido com sucesso'
            });
          })
        ).subscribe();
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
