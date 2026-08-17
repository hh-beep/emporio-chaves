import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';





@Component({
  selector: 'app-adicionar-item',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './adicionar-item.component.html',
  styleUrl: './adicionar-item.component.scss'
})





export class AdicionarItemComponent {



  private router = inject(  Router  );
  storageItems = localStorage.getItem('itensCatalogo');


  formNovoItem = new FormGroup({
    itemName: new FormControl('', {  nonNullable: true  }),
    itemDesc: new FormControl('', {  nonNullable: true  }),
    itemQuant: new FormControl(0, {  nonNullable: true  })
  })





  criarNovoItem() {
    if (  this.storageItems && this.formNovoItem.valid  ) {
      const {  itemName, itemDesc, itemQuant  } = this.formNovoItem.value;

      if (  itemName && itemDesc && itemQuant  ) {
        let valorLista: Array<Object> = JSON.parse(  this.storageItems  );
        let tamanhoLista = Object.values(  valorLista  ).length;




        let novoItemLista = {
          id: tamanhoLista++,
          name: itemName,
          desc: itemDesc,
          quant: itemQuant
        }


        valorLista.push(  novoItemLista  );
        localStorage.setItem('itensCatalogo', JSON.stringify(  valorLista  ));


        this.router.navigate(['sistema/inicio'])
      }
      else {
        alert("Algo de errado nn esta certo")
      }
    }
    else {
      alert("Valores Invalidos")
    }
  }
}
