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

  buscarPorId(  idItem: number  ): Observable<ItensResponseModels> {
    return this.http.get<ItensResponseModels>(  `${this.backendUrl}/${idItem}`  );
  }

  excluir(  idItem: number  ) {
    return this.http.delete(`${  this.backendUrl  }/${  idItem  }`);
  }

  criar(  item: ItensResponseModels  ): Observable<ItensResponseModels> {
    return this.http.post<ItensResponseModels>(  `${  this.backendUrl  }`, item  );
  }

  atualizar(  idItem: number, valuesItem: ItensResponseModels  ): Observable<ItensResponseModels> {
    return this.http.put<ItensResponseModels>(  `${  this.backendUrl  }/${  idItem  }`, valuesItem  );
  }
}
