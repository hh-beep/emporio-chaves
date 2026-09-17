import { inject, Injectable } from "@angular/core";
import { UserRepository } from "../repository/user.repository";
import { UserResponseModel } from "../models/userResponse.model";
import { Router } from "@angular/router";
import { catchError, Observable, of, tap } from "rxjs";
import { UserUpdateModel } from "../models/userUpdate.model";



@Injectable({  providedIn: "root"  })
export class UserService {

  private repository = inject(  UserRepository  );
  private router = inject(  Router  );





  atualizarUsuario(  idUser: number, userInfos: UserUpdateModel  ): Observable<UserResponseModel> {
    return this.repository.atualizar(  idUser, userInfos  );
  }

  listarTodosUsuarios(): Observable<UserResponseModel[]> {
    return this.repository.listarTodos();
  }

  excluirUsuario(  idUser: number  ) {
    localStorage.removeItem('loginUser')
    return this.repository.excluir(  idUser  );
  }




  verificarUsuarioAtual(): Observable<UserResponseModel | null> {
    const storage = localStorage.getItem('loginUser');


    if (  storage  ) {
      try{

        const userInfos: UserResponseModel = JSON.parse(  storage  );

        return this.repository.buscarPorId(  userInfos.id  ).pipe(
          tap(  user => {
            //  ~ Atualizamos o cache do user, caso esteja desatualizado e talz...
            localStorage.setItem(  'loginUser', JSON.stringify(user)  );
          }),


          //  ~ Error de sessão invalida / expirada (algo do banco ou id)...
          catchError(  error => {
            alert('Sessão Inválida! ' + error);
            this.logout();
            return of(null);
          })
        )

      }
      catch (e) {
        alert('Sessão Inválida! ' + e);
        this.logout();
        return of(null);
      }
    }
    else {
      this.logout();
      return of(null);
    }
  }




  logout() {
      localStorage.removeItem("loginUser")
      this.router.navigate(['/login/'])
  }
}
