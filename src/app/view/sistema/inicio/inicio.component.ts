import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';





@Component({
  selector: 'app-inicio',
  imports: [
    RouterLink
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})




export class InicioComponent {

  route = inject(  Router  );
  storage = {
    user: localStorage.getItem('loginUser'),
    items: localStorage.getItem('itensCatalogo')
  }
  localUser!: Object;
  itemsData!: Array<{  id: number, name: string, desc: string, quant: number  }>;





  constructor() {
    //  --- Implementação futura ---  //
    //  ~ Iremos implementar no futuro, pelas services e repositorys, comunicação com o back-end


    this.getStorageUser();
    this.getStorageItemsData();



  }



  getStorageUser() {
    //  ~ Verifica se tem o user "Cadastrado" no localhost...
    if (  this.storage.user  ) {
      this.localUser = JSON.parse(  this.storage.user  );
    }
    else {
      this.route.navigate(['error/405']);
    }
  }


  getStorageItemsData() {
    //  ~ Se não houver itens no localstorage de itens, criaremos aqui...
    if (  this.storage.items  ) {
      this.itemsData = JSON.parse(  this.storage.items  );
    }
    else {
      this.itemsData = [
        {  id: 0, name: 'Chaves Extras simples', desc: 'Serviço de cópia para chaves simples', quant: 10  },
        {  id: 1, name: 'Chaves de Trancas', desc: 'Ajuste e/ou troca de trancas de portas', quant: 5  },
        {  id: 2, name: 'Chaves para Carros', desc: 'Serviço de cópia de chaves para Carros', quant: 3  }
      ]
      localStorage.setItem('itensCatalogo', JSON.stringify(  this.itemsData  ));
    }
  }



  itemQuantPlus(  itemId: number  ) {
    this.itemsData[  itemId  ].quant ++;
    localStorage.setItem('itensCatalogo',  JSON.stringify(  this.itemsData  )  );
  }
  itemQuantMinus(  itemId: number  ) {
    this.itemsData[  itemId  ].quant --;
    localStorage.setItem('itensCatalogo',  JSON.stringify(  this.itemsData  )  );
  }
  removeItem(  itemId: number  ) {
    //  ~ Filtrar p remover o item igual
    //  ~ Nn lembrava q essa function existia
    this.itemsData = this.itemsData.filter(item => item.id !== itemId);
    localStorage.setItem('itensCatalogo', JSON.stringify(this.itemsData));
  }




  redirectPath(  path: string  ) {  this.route.navigate([  path  ])  }
}
