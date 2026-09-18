import { Component, inject, OnInit } from '@angular/core';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { UserService } from '../../../service/user.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { UserResponseModel } from '../../../models/userResponse.model';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserUpdateModel } from '../../../models/userUpdate.model';




@Component({
  selector: 'app-usuario',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    SelectModule,
    ToggleSwitchModule,
    ToastModule,
    ConfirmDialogModule,
    MenuBarComponent
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss',
providers: [MessageService, ConfirmationService]
})




export class UsuarioComponent implements OnInit  {

  //  ~ Vars inportante de sistema
  private router = inject(  Router  );
  private userService = inject(  UserService  );


  //  ~ Injects para os Dialogos
  private messageService = inject(  MessageService  );
  private confirmationService = inject(  ConfirmationService  );





  userInfo$!: Observable<UserResponseModel | null>;    //  ~ Temos que deixar do tipo model | null, pois pode haver error de cache com o cache de user logado atual e talz.
  isLoading = false;
  userId!: number;


  formUsuario = new FormGroup({
    nome: new FormControl('', { nonNullable: true,  }),
    login: new FormControl('', { nonNullable: true,  }),
    senha: new FormControl('', { nonNullable: true }), // Opcional
    perfil: new FormControl<'DONO' | 'FUNCIONARIO' >('FUNCIONARIO', {  nonNullable: true  }),
    ativo: new FormControl(true, {  nonNullable: true  })
  });





  ngOnInit(): void {
    this.userInfo$ = this.userService.verificarUsuarioAtual().pipe(
      tap(  user => {
        if (user) {
          this.formUsuario.patchValue({
            nome: user.nome,
            login: user.login,
            perfil: user.perfil,
            ativo: user.ativo
          });

          //  ~ Guardamos o id p dps ficar mais facil de alteramos;
          this.userId = user.id;
        }
        else {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Ocorreu algum erro...'
          });
        }
      })
    );
  }



  salvarAlteracoes() {
    if (this.formUsuario.valid && this.userId) {
      this.isLoading = true;
      const dadosForm = this.formUsuario.value;



      //   ~ cria um molde de usuarioUpdate para encaminhar
      const userUpdate = {
        nome: dadosForm.nome,
        login: dadosForm.login,
        perfil: dadosForm.perfil,
        ativo: dadosForm.ativo,

        //  ~ Se tiver texto na senha, envia. Se estiver vazia, envia null (que seu backend Java vai ignorar)
        senha: dadosForm.senha && dadosForm.senha.trim() !== '' ? dadosForm.senha : null
      };

      this.userService.atualizarUsuario(this.userId, userUpdate as UserUpdateModel).subscribe({
        next: (usuarioAtualizado) => {

          //  ~ Atualiza o user local
          localStorage.setItem('loginUser', JSON.stringify(usuarioAtualizado));


          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Usuário atualizado com sucesso!'
          });


          //  ~ Reseta o estado do form e limpa o campo de senha por segurança
          this.formUsuario.markAsPristine();
          this.formUsuario.get('senha')?.reset('');
        },
        error: (err) => {
          console.error('Erro detalhado:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Problema ao atualizar: ' + (err.error?.message || err.message)
          });
        },
        //  ~ O loading so termina/muda dps de tudo
        complete: () => {  this.isLoading = false  }
      });
    }
  }




  logout() {

    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este item?',
      header: 'Confirmação de Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      accept: () => {

        this.messageService.add({
          severity: 'success',
          summary: 'Saindo...',
          detail: 'Encerrando sessão...'
        });


        setTimeout(  () => {  this.userService.logout()  }, 800)
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Cancelado',
          detail: 'Saida Cancelada...'
        });
      }
    });
  }
}
