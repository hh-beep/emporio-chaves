import { Component, inject } from '@angular/core';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';





@Component({
  selector: 'app-usuario-admin',
  imports: [
    MenuBarComponent,
    ButtonModule,
    AsyncPipe,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './usuario-admin.component.html',
  styleUrl: './usuario-admin.component.scss',
  providers: [  ConfirmationService, MessageService  ]  //  ~ Provedores locais dos modulos
})




export class UsuarioAdminComponent {

  //  ~ Injects Principais do Sistema..
  private service = inject(  UserService  );
  private router = inject(  Router  );
  private confirmationService = inject(  ConfirmationService  );      //  ~ O modulo Confirmation cria a box principal..
  private messageService = inject(  MessageService  );                //  ~ Este modulo cria o "Alert" de canto da pagina...


  listaUsers$ = this.service.listarTodosUsuarios();












  adicionarUser() {  this.router.navigate(  ['/sistema/usuario/admin/adicionar']  );  }
  editarUser(  userId: number  ) {  this.router.navigate(  [`/sistema/usuario/admin/editar/${  userId  }`]  );  }



  deletarUser(  userId: number  ) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este Usuario?',
      header: 'Confirmação de Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      acceptButtonStyleClass: "p-button-danger p-button-text",

      accept: () => {

        //  ~ O pipe aqui serve para atualizar a lista após deletar, chamando o tap pra recarregar...
        this.service.excluirUsuario(  userId  ).pipe(
          //  ~ O tap pra realizarmos ações quando houver o delete
          tap(  () => {

            this.listaUsers$ = this.service.listarTodosUsuarios();     //  ~ Atualizamos as categorias...

            //  ~ Mensagemzinha
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Usuario removido com sucesso'
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
