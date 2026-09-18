import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoriasRepository } from "../repository/categorias.repository";
import { CategoriasResponseModel } from "../models/categoriasResponse.models";
import { CategoriasUpdateModel } from "../models/categoriasUpdate.model";
import { CategoriaRequestModel } from "../models/categoriasRequest.model";




@Injectable({ providedIn: 'root' })
export class CategoriasService {

  private repository = inject(  CategoriasRepository  );





  pegarCategorias(): Observable<CategoriasResponseModel[]> {
    return this.repository.listarTodas();
  }


  buscarCatPorId(  idItem: number  ): Observable<CategoriasResponseModel> {
    return this.repository.buscarPorId(  idItem  );
  }

  atualizarCategoria(  idItem: number, item: CategoriasUpdateModel  ): Observable<CategoriasResponseModel> {
    return this.repository.atualizar(  idItem, item );
  }

  criarCategoria(  item: CategoriaRequestModel  ): Observable<CategoriasResponseModel> {
    return this.repository.criar(  item  );
  }

  deletarCategoria(  idItem: number  ) {  return this.repository.deletar(  idItem  )  }
}
