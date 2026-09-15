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

}
