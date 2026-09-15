import { inject, Injectable } from "@angular/core";
import { enviroment } from "../../enviroments/enviroments";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ItensResponseModels } from "../models/itensResponse.models";



@Injectable({  providedIn: 'root'  })
export class ItensRepository {

  private backendUrl = `${  enviroment.apiUrl }/itens`
  private http = inject(  HttpClient  );



  listarTodos(): Observable<ItensResponseModels[]> {
    return this.http.get<ItensResponseModels[]>(  this.backendUrl  );
  }



}
