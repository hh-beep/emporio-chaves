import { inject, Injectable } from "@angular/core";
import { ItensResponseModels } from "../models/itensResponse.models";
import { Observable } from "rxjs";
import { ItensRepository } from "../repository/itens.repository";



@Injectable({  providedIn: "root"  })
export class ItensService {

  private repository = inject(  ItensRepository  );




  listarItens(): Observable<ItensResponseModels[]> {
    return this.repository.listarTodos();
  }


  buscarPorId(  idItem: number  ): Observable<ItensResponseModels> {
    return this.repository.buscarPorId(  idItem  );
  }


  deletarItemPorId(  idItem: number  ) {
    return this.repository.excluir(  idItem  );
  }


  criarItem(  item: ItensResponseModels  ): Observable<ItensResponseModels> {
    return this.repository.criar(  item  );
  }


  atualizarItem(  idItem: number, valuesItem: ItensResponseModels  ): Observable<ItensResponseModels> {
    return this.repository.atualizar(  idItem, valuesItem  );
  }
}
