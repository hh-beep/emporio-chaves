import { inject, Injectable } from "@angular/core";
import { enviroment } from "../../enviroments/enviroments";
import { HttpClient } from "@angular/common/http";
import { UserResponseModel } from "../models/userResponse.model";
import { Observable } from "rxjs";
import { UserUpdateModel } from "../models/userUpdate.model";



@Injectable({  providedIn: 'root'  })
export class UserRepository {

  private backendUrl = `${  enviroment.apiUrl  }/usuarios`;
  private http = inject(  HttpClient  );




  buscarPorId(  userId: number  ): Observable<UserResponseModel> {
    return this.http.get<UserResponseModel>(  `${  this.backendUrl  }/${  userId  }`  )
  }


  atualizar(  idUser: number, userInfos: UserUpdateModel  ): Observable<UserResponseModel> {
    return this.http.put<UserResponseModel>(  `${  this.backendUrl  }/${  idUser  }`, userInfos   );
  }
  listarTodos(): Observable<UserResponseModel[]> {
    return this.http.get<UserResponseModel[]>(  `${  this.backendUrl  }`  );
  }
  excluir(  idUser: number  ) {
    return this.http.delete(  `${  this.backendUrl}/${idUser}`  );
  }
}
