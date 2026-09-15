import { inject, Injectable } from "@angular/core";
import { enviroment } from "../../enviroments/enviroments";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { LoginRequestModel } from "../models/loginRequest.model";
import { loginResponseModel } from "../models/loginResponse.model";



//  ~ A ideia de se ter um repository é a de se ter uma classe apenas para se conectar com o banco...
@Injectable({  providedIn: "root"  })
export class LoginRepository {

  //  ~ Definido local, para se rodar o back via docker...
  private bancoUrl: string = `${  enviroment.apiUrl  }/login`;
  private http = inject(  HttpClient  );



  login(  request: LoginRequestModel  ): Observable<loginResponseModel> {
    return this.http.post<loginResponseModel>(this.bancoUrl, request);
  }
}
