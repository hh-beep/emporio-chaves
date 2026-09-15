import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ItemStorageService } from '../../service/item-storage.service';
import { HeaderComponent } from '../shared/header/header.component';
import { ItensResponseModels } from '../../models/itensResponse.models';
import { CatalogoService } from '../../service/catalogo.service';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AsyncPipe
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})





export class CatalogoComponent implements OnInit  {

  service = inject(  CatalogoService  );
  items$: Observable<ItensResponseModels[]> = this.service.listarItens();





  ngOnInit(): void {
    console.log(this.items$)
  }

}
