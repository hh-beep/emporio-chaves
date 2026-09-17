import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoriasRepository } from "../repository/categorias.repository";
import { CategoriasResponseModel } from "../models/categoriasResponse.models";




@Injectable({ providedIn: 'root' })
export class CategoriasService {

  private repository = inject(  CategoriasRepository  );


  pegarCategorias(): Observable<CategoriasResponseModel[]> {
    return this.repository.listarTodas();
  }
}
