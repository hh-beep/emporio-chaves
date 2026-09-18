import { Observable } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../enviroments/enviroments";
import { CategoriasResponseModel } from "../models/categoriasResponse.models";
import { CategoriasUpdateModel } from "../models/categoriasUpdate.model";
import { CategoriaRequestModel } from "../models/categoriasRequest.model";



@Injectable({  providedIn: 'root'  })
export class CategoriasRepository {


  private backendUrl = `${  enviroment.apiUrl  }/categorias`;
  private http = inject(  HttpClient  );




  //  ~ No repository, as actions terão os mesmos nomes do back-end...
  //  [GET]
  listarTodas(): Observable<CategoriasResponseModel[]> {
    return this.http.get<CategoriasResponseModel[]>(  this.backendUrl  );
  }


  buscarPorId(  idItem: number  ): Observable<CategoriasResponseModel> {
    return this.http.get<CategoriasResponseModel>(  `${  this.backendUrl  }/${  idItem  }`  );
  }

  atualizar(  idItem: number, item: CategoriasUpdateModel  ): Observable<CategoriasResponseModel> {
    return this.http.put<CategoriasResponseModel>(  `${  this.backendUrl  }/${  idItem  }`, item  );
  }

  criar(  item: CategoriaRequestModel  ): Observable<CategoriasResponseModel> {
    return this.http.post<CategoriasResponseModel>(  `${  this.backendUrl  }`, item  );
  }

  deletar(  idItem: number  ) {
    return this.http.delete(  `${  this.backendUrl  }/${  idItem  }`  );
  }
}
