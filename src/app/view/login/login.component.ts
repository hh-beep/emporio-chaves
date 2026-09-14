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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})




export class LoginComponent implements OnInit  {


  //  ~ Variaveis privadas para auths, validações e rotas
  //  ~ O uso do inject substiitui a nescessidade de chamar o constructor para declarar a variavel...
  //private authService = inject(  AuthService  );
  private router = inject(  Router  );




  //  ~ Nosso formulario
  loginForm = new FormGroup({
    email: new FormControl('', {  nonNullable: true  }),
    password: new FormControl('', {  nonNullable: true  }),
  })

  emailError: boolean = false;
  passwordError: boolean = false;



  ngOnInit() {
    if (  localStorage.getItem('loginUser')  ) {
      this.router.navigate(['sistema']);
    }
  }






  entrar() {



    /*
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
    */
  }
}
