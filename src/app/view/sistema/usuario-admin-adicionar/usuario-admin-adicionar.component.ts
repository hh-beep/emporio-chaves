import { Component, inject } from '@angular/core';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { UserRequestModel } from '../../../models/userRequest.model';

@Component({
  selector: 'app-usuario-admin-adicionar',
  imports: [
    MenuBarComponent,
    ReactiveFormsModule,
    SelectModule,
    FloatLabelModule,
    InputTextModule,
    AsyncPipe,
    ButtonModule,
    ToggleSwitchModule,
    ToastModule,
  ],
  templateUrl: './usuario-admin-adicionar.component.html',
  styleUrl: './usuario-admin-adicionar.component.scss',
  providers: [MessageService]
})
export class UsuarioAdminAdicionarComponent {

  // ~ Services
  private router = inject(Router);
  private messageService = inject(MessageService);
  private userService = inject(UserService);

  isLoading: boolean = false;

  // ~ Opções para o perfil
  perfis = [
    { label: 'DONO', value: 'DONO' },
    { label: 'FUNCIONARIO', value: 'FUNCIONARIO' }
  ];

  // ~ forms
  formUser = new FormGroup({
    nome: new FormControl('', {  nonNullable: true  }),
    login: new FormControl('', {  nonNullable: true }),
    senha: new FormControl('', { nonNullable: true }),
    perfil: new FormControl<'DONO' | 'FUNCIONARIO'>('FUNCIONARIO', { nonNullable: true }),
    ativo: new FormControl(true, { nonNullable: true })
  });

  adicionarUser() {
    if (this.formUser.valid) {
      this.isLoading = true;
      const userData = this.formUser.value;

      this.userService.adicionarUser(userData as UserRequestModel).subscribe({
        next: () => {
          this.isLoading = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Usuário criado com sucesso!'
          });

          setTimeout(  () => {  this.router.navigate(  ['/sistema/usuario/admin'])  }, 800  );
        },
        error: (err) => {
          this.isLoading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Problema ao criar usuário: ' + err
          });

          setTimeout(  () => {  this.router.navigate(  ['/sistema/usuario/admin'])  }, 800  );
        }
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Atenção',
        detail: 'Preencha todos os campos obrigatórios!'
      });
    }
  }
}
