import {  Component, inject  } from '@angular/core';

//  ~ Para acessar Parametros de Query
import { ActivatedRoute } from '@angular/router';

//  ~ Components
import { HeaderComponent } from '../shared/header/header.component';






@Component({
  selector: 'app-error',
  imports: [
    HeaderComponent
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})





export class ErrorComponent {

  //  ~  Definimos uma variavel que tem infos sobre a rota ativa atual
  private route = inject(  ActivatedRoute  );
  errorCode!: number;




  //  ---   ERRO ---  //
  //  ~ Uhhh, isso daq nn funciona do jeito q eu tava esperando, ele só retorna 404, mas enfim
  //  ~ Não é algo tão nescessário no momento...
  constructor() {
    //  ~ Definimos que ele utilizara como errorCode ou o codigo que esta na query da URL ou sera o 404
    this.errorCode = Number(  this.route.snapshot.paramMap.get("errorCode")  ) ?? 404;
  }
}
