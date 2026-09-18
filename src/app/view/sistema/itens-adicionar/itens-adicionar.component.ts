import { Component, inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CategoriasService } from '../../../service/categorias.service';
import { ItensService } from '../../../service/itens.service';
import { map, Observable } from 'rxjs';
import { CategoriasResponseModel } from '../../../models/categoriasResponse.models';
import { ItensResponseModels } from '../../../models/itensResponse.models';




@Component({
  selector: 'app-itens-adicionar',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MenuBarComponent,
    SelectModule,
    FloatLabelModule,
    InputTextModule,
    AsyncPipe,
    ButtonModule,

    ToastModule,      //  ~ O alert
  ],
  templateUrl: './itens-adicionar.component.html',
  styleUrl: './itens-adicionar.component.scss',
  providers: [  MessageService  ]
})




export class ItensAdicionarComponent implements OnInit {

  //  ~ Listas/Services
  private router = inject(  Router  );
  private messageService = inject(  MessageService  );
  private categoriasService = inject(  CategoriasService  );
  private itensService = inject(  ItensService  );



  //  ~ O listaCategorias$ quero que funcione da mesma forma, mas só que recebendo da service um array de Observable do tipo [{  nome: string, id: number, ativo: boolean,}] (que eu tenho uma model chamada CategoriaResponse.models.ts)
  listaTiposItem = [
    {  id: '0', name: "Produto", value: "PRODUTO"  },
    {  id: '1', name: "Servico", value: "SERVICO"  },
  ]

  listaCategorias$!: Observable<CategoriasResponseModel[]>;


  //  ~ Campos de Form
  formAdicionarItem = new FormGroup({
    nome: new FormControl('', {  nonNullable: true  }),
    descricao: new FormControl('', {  nonNullable: true  }),
    preco: new FormControl(0, {  nonNullable: true  }),
    tipo: new FormControl('', {  nonNullable: true  }),
    categoriaId: new FormControl(0, {  nonNullable: true  })
  })






  ngOnInit(): void {
    //  ~ Logica para puxar a lista de categorias de itens
    this.listaCategorias$ = this.categoriasService.pegarCategorias().pipe(
      map(  categorias => categorias.filter(  c => c.ativo  ))
    );
  }






  criarItem() {

    if (  this.formAdicionarItem.valid  ) {

        const newItemInfos = this.formAdicionarItem.value;


        //  ~ o 'as' e nescessario pois garante que os valores do InfoUpdate (que e do tipo FormGroup) se encaixam no modelo...
        this.itensService.criarItem(  newItemInfos as ItensResponseModels  ).subscribe({
        next: () => {


          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Item criado com sucesso'
          });

          setTimeout(  () => {  this.router.navigate(['/sistema/itens'])  }, 800  );
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Problema ao criar item...' + err
          });


          setTimeout(  () => {  this.router.navigate(['/sistema/itens'])  }, 800  );
        }
      });

      }
  }

}
