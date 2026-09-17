import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { SelectModule, SelectItem } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CategoriasService } from '../../../service/categorias.service';
import { ItensService } from '../../../service/itens.service';
import { map, Observable, tap } from 'rxjs';
import { CategoriasResponseModel } from '../../../models/categoriasResponse.models';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ItensResponseModels } from "../../../models/itensResponse.models";
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';





@Component({
  selector: 'app-editar-item',
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
  templateUrl: './editar-item.component.html',
  styleUrl: './editar-item.component.scss',
  providers: [  MessageService  ]
})







export class EditarItemComponent implements OnInit {

  //  ~ Injects Principais para Sistema
  private router = inject(  Router  );
  private rota = inject(  ActivatedRoute  );
  private messageService = inject(  MessageService  );


  //  ~ Listas/Services
  private categoriasService = inject(  CategoriasService  );
  private itensService = inject(  ItensService  );



  //  ~ Id pego pela rota (PathParam)
  itemId = this.rota.snapshot.paramMap.get('id');



  //  ~ O listaCategorias$ quero que funcione da mesma forma, mas só que recebendo da service um array de Observable do tipo [{  nome: string, id: number, ativo: boolean,}] (que eu tenho uma model chamada CategoriaResponse.models.ts)
  listaTiposItem = [
    {  id: '0', name: "Produto", value: "PRODUTO"  },
    {  id: '1', name: "Servico", value: "SERVICO"  },
  ]

  listaCategorias$!: Observable<CategoriasResponseModel[]>;





  //  ~ Campos de Form
  formEditarItem = new FormGroup({
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





    //  ~ Logica para puxar nos campos os valores do item, buscando pelo banco de dados...
    if (  this.itemId != undefined  ) {
      this.itensService.buscarPorId(  Number(this.itemId)  ).pipe(

        tap(  (item: ItensResponseModels) => {

          //  ~ PatchValue serve para atualizar os valores dos campos...
          this.formEditarItem.patchValue({
            nome: item.nome,
            descricao: item.descricao,
            preco: item.preco,
            tipo: item.tipo,
            categoriaId: item.categoriaId
          })
        })
      ).subscribe();  //  ~ Termina de Executar a request...
    }
  }






  editarItem() {
    if (  this.formEditarItem.valid && this.itemId  ) {
      if (  this.itensService.buscarPorId(  Number(this.itemId)  ) != null  ) {     //  ~ Valida/confirma se o item existe mesmo...
        const infosUpdate = this.formEditarItem.value;

        //  ~ o 'as' e nescessario pois garante que os valores do InfoUpdate (que e do tipo FormGroup) se encaixam no modelo...
        this.itensService.atualizarItem(  Number(this.itemId), infosUpdate as ItensResponseModels  ).subscribe({
          next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Item atualizado com sucesso'
          });

          setTimeout(  () => {  this.router.navigate(['/sistema/itens'])  }, 800  );
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Problema ao atualizar' + err
          });


          setTimeout(  () => {  this.router.navigate(['/sistema/itens'])  }, 800  );
        }
      });
      }
    }
  }
}
