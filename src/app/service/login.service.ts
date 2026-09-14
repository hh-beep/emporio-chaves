import { inject } from "@angular/core";
import { LoginRepository } from "../repository/login.repository";



export class LoginService {

  repository = inject(  LoginRepository  );



  /*
    if (  email == 'admin@texte.com' && password == '123456'  ) {
      localStorage.setItem("loginUser", JSON.stringify({
        email: email,
        type: 'Admin'
      }));
      return true;
    }
    else if (  email == 'email@texte.com' && password == '123456'  ) {
      localStorage.setItem("loginUser", JSON.stringify({
        email: email,
        type: 'User'
      }));
      return true;
    }
    else {
      alert("Usuario não cadastrado!");
      return false;
    }

    */
}

