import { Observable } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../enviroments/enviroments";
import { CategoriasResponseModel } from "../models/categoriasResponse.models";



@Injectable({  providedIn: 'root'  })
export class CategoriasRepository {


  private backendUrl = `${  enviroment.apiUrl  }/categorias`;
  private http = inject(  HttpClient  );


  //  ~ No repository, as actions terão os mesmos nomes do back-end...
  //  [GET]
  listarTodas(): Observable<CategoriasResponseModel[]> {
    return this.http.get<CategoriasResponseModel[]>(  this.backendUrl  );
  }
}
