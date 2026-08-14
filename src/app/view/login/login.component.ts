import {
  Component,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';

//  ~ Form imports
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

// import { loginFormModel } from '../../models/loginFormModel';
import { Router } from '@angular/router';

//  ~ Components
import {  HeaderComponent  } from '../shared/header/header.component';
import { loginFormModel } from '../../models/loginFormModel';




@Component({
  selector: 'app-login',
  imports: [
    HeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})



export class LoginComponent {


  //  ~ Variaveis privadas para auths, validações e rotas
  //  ~ O uso do inject substiitui a nescessidade de chamar o constructor para declarar a variavel...
  //private authService = inject(  AuthService  );
  private router = inject(  Router  );




  //  ~ Nosso formulario
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })




  entrar() {
    console.log(  this.loginForm.value.email, this.loginForm.value.password  );
  }
}
