import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from '../../../service/user.service';
import { Observable, tap } from 'rxjs';
import { UserResponseModel } from '../../../models/userResponse.model';
import { UserUpdateModel } from '../../../models/userUpdate.model';




@Component({
  selector: 'app-usuario-admin-editar',
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
  templateUrl: './usuario-admin-editar.component.html',
  styleUrl: './usuario-admin-editar.component.scss',
  providers: [MessageService, ConfirmationService]
})





export class UsuarioAdminEditarComponent implements OnInit  {



  //  ~ Vars inportante de sistema
  private router = inject(  Router  );
  private rotaInfos = inject(  ActivatedRoute  );
  private userService = inject(  UserService  );


  //  ~ Injects para os Dialogos
  private messageService = inject(  MessageService  );
  private userId =  this.rotaInfos.snapshot.paramMap.get('id');





  userInfo$!: Observable<UserResponseModel | null>;    //  ~ Temos que deixar do tipo model | null, pois pode haver error de cache com o cache de user logado atual e talz.
  isLoading = false;



  formUsuario = new FormGroup({
    nome: new FormControl('', { nonNullable: true,  }),
    login: new FormControl('', { nonNullable: true,  }),
    senha: new FormControl('', { nonNullable: true }), // Opcional
    perfil: new FormControl<'DONO' | 'FUNCIONARIO' >('FUNCIONARIO', {  nonNullable: true  }),
    ativo: new FormControl(true, {  nonNullable: true  })
  });





  ngOnInit(): void {
    if (  this.userId  ) {

    this.userInfo$ = this.userService.buscarPorId(  Number(this.userId)  ).pipe(
      tap(  user => {
        if (user) {
          this.formUsuario.patchValue({
            nome: user.nome,
            login: user.login,
            perfil: user.perfil,
            ativo: user.ativo
          });
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

      this.userService.atualizarUsuario(  Number(this.userId), userUpdate as UserUpdateModel).subscribe({
        next: () => {



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
}
