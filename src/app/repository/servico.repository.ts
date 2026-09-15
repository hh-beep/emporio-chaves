import { Observable } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../enviroments/enviroments";
import { ServicoModel } from "../models/servicos.models";



@Injectable({  providedIn: 'root'  })
export class ServicoRepository {


  private backendUrl = `${  enviroment.apiUrl  }/categorias`;
  private http = inject(  HttpClient  );


  //  ~ No repository, as actions terão os mesmos nomes do back-end...
  //  [GET]
  listarTodas(): Observable<ServicoModel[]> {
    return this.http.get<ServicoModel[]>(  this.backendUrl  );
  }
}
