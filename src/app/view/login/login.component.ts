import {
  Component,
  inject,
  OnInit
} from '@angular/core';

//  ~ Form imports
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from "@angular/forms";

//  ~ Route
import { Router } from '@angular/router';

//  ~ Components
import {  HeaderComponent  } from '../shared/header/header.component';

//  ~ PrimeNG
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LoginService } from '../../service/login.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';







@Component({
  selector: 'app-login',
  imports: [
    HeaderComponent,
    ReactiveFormsModule,

    //  ~ PrimeNG
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    ToastModule,      //  ~ O alert
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

  providers: [  MessageService  ]
})




export class LoginComponent implements OnInit  {


  //  ~ Variaveis privadas para auths, validações e rotas
  //  ~ O uso do inject substiitui a nescessidade de chamar o constructor para declarar a variavel...
  private service: LoginService = inject(  LoginService  );
  private router = inject(  Router  );
  private messageService = inject(  MessageService  );




  //  ~ Nosso formulario
  loginForm = new FormGroup({
    login: new FormControl('', {  nonNullable: true  }),
    senha: new FormControl('', {  nonNullable: true  }),
  })

  credenciaisInvalidas: boolean = false;
  emailError: boolean = false;
  passwordError: boolean = false;



  ngOnInit() {
    if (  this.service.estaLogado()  ) {
      this.router.navigate(['sistema']);
    }
  }




  entrar() {
    this.credenciaisInvalidas = false;

    if (this.loginForm.valid) {
      const { login, senha } = this.loginForm.value;

      if (login && senha) {
        this.emailError = false;
        this.passwordError = false;

        this.service.login({ login, senha }).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Login feito com sucesso!'
            });

            setTimeout(  () => {  this.router.navigate(['/sistema/inicio'])  }, 800  );
          },
          error: err => {
            console.error(err);
            this.credenciaisInvalidas = true;
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Erro ao fazer login: ' + err
            });
          }
        });
      }
      else {
        this.emailError = !login;
        this.passwordError = !senha;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Credenciais Invalidas',
        });
      }
    }
    else {
      alert("Error");
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Credenciais Invalidas',
        });
    }
  }
}
