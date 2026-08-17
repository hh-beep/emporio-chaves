import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';





@Component({
  selector: 'app-editar-item',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './editar-item.component.html',
  styleUrl: './editar-item.component.scss'
})







export class EditarItemComponent {


  private router = inject(  Router  );
  private rota = inject(  ActivatedRoute  );
  itemId = this.rota.snapshot.paramMap.get('id');
  storageItems = localStorage.getItem('itensCatalogo');


  formEditarItem = new FormGroup({
    itemName: new FormControl('', {  nonNullable: true  }),
    itemDesc: new FormControl('', {  nonNullable: true  }),
    itemQuant: new FormControl(0, {  nonNullable: true  })
  })


  constructor() {
    if (  this.storageItems && this.itemId  ) {
      let itemInfos = JSON.parse(  this.storageItems  )[  this.itemId  ];



      //  ~ Funcao p atualizar os valores do FormGroup
      this.formEditarItem.patchValue({
        itemName: itemInfos.name,
        itemDesc: itemInfos.desc,
        itemQuant: itemInfos.quant
      })
    }
  }






  editarItem() {
    if (  this.formEditarItem.valid && this.storageItems && this.itemId  ) {
      const {  itemName, itemDesc, itemQuant  } = this.formEditarItem.value;
      let storageItemsValue = JSON.parse(  this.storageItems  );


      //  ~ Eu pensei seriamente de puxar cada valor por valor de um JSON.parse(item)[id], pq ia ser menos linhas mas sla kkkkk
      let cloneItem = {
        id: Number(  this.itemId  ),
        name: itemName,
        desc: itemDesc,
        quant: itemQuant
      };

      storageItemsValue.splice(  this.itemId, 1, cloneItem  );
      localStorage.setItem('itensCatalogo', JSON.stringify(  storageItemsValue  ));

      this.router.navigate(['sistema/inicio'])
    }
  }
}
