import { inject, Injectable } from "@angular/core";
import { ServicoRepository } from "../repository/servico.repository";
import { ServicoModel } from "../models/servicos.models";
import { Observable } from "rxjs";




@Injectable({ providedIn: 'root' })
export class ServicoService {

  private repository = inject(ServicoRepository);


  pegarCategorias(): Observable<ServicoModel[]> {
    return this.repository.listarTodas();
  }
}
