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
import {  loginFormModel  } from '../../models/loginFormModel';
import {  login  } from "../../service/login.service";



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
    email: new FormControl('', {  nonNullable: true  }),
    password: new FormControl('', {  nonNullable: true  }),
  })


  emailError = false;
  passwordError = false;






  entrar() {

    if (  this.loginForm.valid  ) {
      const {  email, password  } = this.loginForm.value;


      if (  email && password  ) {
        login(  email, password  )
          .then(  () => {  this.router.navigate(['sistema'])  })
      }
      else {
        if (  !email && !password  ) {  return this.emailError, this.passwordError = true;  }
        else if(  !email  ) {  return this.emailError = true;  }
        else {  return this.passwordError = true;  }
      }
    }
    else {  return alert("Error");  }
  }
}
