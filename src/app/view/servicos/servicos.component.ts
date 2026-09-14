import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { ServicoModel } from '../../models/servicos.models';
import { ServicoService } from '../../service/servico.service';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-servicos',
  imports: [
    HeaderComponent,
    AsyncPipe,        //  ~ Modulo para usar as var de Pipe
  ],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})



export class ServicosComponent implements OnInit {

  private service = inject(  ServicoService  );


  //  ~ Implementação de Pipes do angular.. Eles recebem Observable, e tratam automaticamente o subscribe e o unsubscribe...
  categorias$ = this.service.pegarCategorias();       //  ~ O $ faz nada na variavel, apenas convenção de variaveis Pipe


  ngOnInit(): void {
    console.log(  this.categorias$  )
  }
}
