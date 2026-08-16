import { FormGroup } from "@angular/forms";
import { loginFormModel } from "../models/loginFormModel";


export async function login(  email: string, password: string  ) {





  //  ~ Simmm, uma verificação bem basica e chula só p ver qual que estão vazios e talz
  //  ~ Tem jeitos 1000x melhores pra verificar isso, mas acabei deixando assim por enquanto
  //  ~ Aqui é onde terá a conexão com o backend - banco no futuro, mas, por enquanto, verificaremos se é uma conta
  //  ~ com alguns parametros pre-montados

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

}

