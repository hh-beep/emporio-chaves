import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';




@Component({
  selector: 'app-catalogo',
  imports: [
    HeaderComponent
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})



export class CatalogoComponent {

  storageItems = localStorage.getItem('itensCatalogo');
  itemsCatalogo!: Array<{  id: number, name: string, desc: string, quant: number  }>;


  constructor() {
    if(  this.storageItems  ) {
      this.itemsCatalogo = JSON.parse(  this.storageItems  );
    }
    else {
      alert("Sem itens carregados no catalogo!!");
    }
  }
}
