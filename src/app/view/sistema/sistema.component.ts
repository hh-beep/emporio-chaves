import { Component, inject } from '@angular/core';

import { HeaderComponent } from '../shared/header/header.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sistema',
  imports: [
    HeaderComponent
  ],
  templateUrl: './sistema.component.html',
  styleUrl: './sistema.component.scss'
})



export class SistemaComponent {


  route = inject(  Router  );
  storage = localStorage.getItem('loginUser');
  localUser!: Object;
  itemsData!: Array<Object>;





  constructor() {
    //  --- Implementação futura ---  //
    //  ~ Verifica se tem o user "Cadastrado" no localhost...
    if (  this.storage  ) {
      this.localUser = JSON.parse(  this.storage  );
    }
    else {
      this.route.navigate(['error/405']);
    }






  }
}
