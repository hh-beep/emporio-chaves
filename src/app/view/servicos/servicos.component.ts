import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { ServicoService } from '../../service/servico.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CategoriasResponseModel } from '../../models/categoriasResponse.models';



@Component({
  selector: 'app-servicos',
  imports: [
    HeaderComponent,
    AsyncPipe,//  ~ Modulo para usar as var de Pipe
    ButtonModule,
  ],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})



export class ServicosComponent implements OnInit {

  private service = inject(  ServicoService  );
  private router = inject(  Router  );

  //  ~ Implementação de Pipes do angular.. Eles recebem Observable, e tratam automaticamente o subscribe e o unsubscribe...
  categorias$: Observable<CategoriasResponseModel[]> = this.service.pegarCategorias();       //  ~ O $ faz nada na variavel, apenas convenção de variaveis Pipe







  ngOnInit(): void {
    console.log(  this.categorias$  )
  }



  navigatePath(  path: string  ) {
    this.router.navigate(  [path]  );
  }
}
