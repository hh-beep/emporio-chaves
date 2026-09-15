import { inject, Injectable } from "@angular/core";
import { LoginRepository } from "../repository/login.repository";
import { LoginRequestModel } from "../models/loginRequest.model";
import { Observable, tap } from "rxjs";
import { loginResponseModel } from "../models/loginResponse.model";



//  ~ OBS: o user logado ainda estamos aplicando via LocalStorage, mas a criação, busca e CRUD de usuario se dá através do backend
@Injectable({  providedIn: "root"  })
export class LoginService {

  private repository = inject(  LoginRepository  );



  //  [POST]
  login(  request: LoginRequestModel  ): Observable<loginResponseModel> {
    //  ~ O .pipe serve pra gnt poder atribuir novos operadores em Observables, pra processar a response antes de dar um .subscribe
    return this.repository.login(  request  ).pipe(
      //  ~ O tap serve, junto com o pipe, pra poder atribuir/executar comandos dentro do pipe, para que execute medotos sem alterar dados do que sera a response;
      tap(  resp => this.salvarSessao(resp))        //  ~ Por exemplo, este tap() serve para alocarmos no localStorage o user;
    );
  }




  //  ~ Methodos da classe
  private salvarSessao(  user: loginResponseModel  ) {
    localStorage.setItem('loginUser', JSON.stringify(  user  ));
  }


  logout(): void {
    localStorage.removeItem('loginUser');
  }


  usuarioLogado(): loginResponseModel | null {
    const raw = localStorage.getItem('loginUser');
    return raw ? JSON.parse(raw) : null;
  }

  estaLogado(): boolean {
    return this.usuarioLogado() !== null;
  }
}
