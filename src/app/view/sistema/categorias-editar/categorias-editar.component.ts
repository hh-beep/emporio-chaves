import { Component, inject, OnInit } from '@angular/core';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../../../service/categorias.service';
import { tap } from 'rxjs';
import { CategoriasResponseModel } from '../../../models/categoriasResponse.models';






@Component({
  selector: 'app-categorias-editar',
  imports: [
    MenuBarComponent,
    ReactiveFormsModule,
    SelectModule,
    FloatLabelModule,
    InputTextModule,
    AsyncPipe,
    ButtonModule,
    ToggleSwitchModule,


    ToastModule,      //  ~ O alert
  ],
  templateUrl: './categorias-editar.component.html',
  styleUrl: './categorias-editar.component.scss',
  providers: [  MessageService  ]
})





export class CategoriasEditarComponent implements OnInit  {



  //  ~ Services
  private router = inject(  Router  );
  private rotaInfos = inject(  ActivatedRoute  );
  private messageService = inject(  MessageService  );
  private categoriasService = inject(  CategoriasService  );
  private catId = this.rotaInfos.snapshot.paramMap.get('id');



  isLoading: boolean = false;


  //  ~ forms
  formCategoria = new FormGroup({
    nome: new FormControl('', {  nonNullable: true  }),
    ativo: new FormControl(true, {  nonNullable: true  })
  })





  //  ~ O campo recebe os valores do Item...
  ngOnInit(): void {
    if (  this.catId  ) {
      this.categoriasService.buscarCatPorId(  Number(  this.catId  )  ).pipe(
        tap(  (  cat  ) => {
          this.formCategoria.patchValue({
            nome: cat.nome,
            ativo: cat.ativo
          })
        })
      ).subscribe();
    }
  }





  editarCategoria() {
    if (  this.catId && this.formCategoria.valid  ) {
      if (  this.categoriasService.buscarCatPorId(  Number(this.catId)  ) != null  ) {


        const newCatInfos = this.formCategoria.value;


        this.categoriasService.atualizarCategoria(  Number(this.catId), newCatInfos as CategoriasResponseModel  ).subscribe({

          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Categoria atualizada com sucesso'
            });

            setTimeout(  () => {  this.router.navigate(['/sistema/categorias'])  }, 800  );
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Problema ao atualizar' + err
            });


            setTimeout(  () => {  this.router.navigate(['/sistema/categorias'])  }, 800  );
          }
        })
      }
    }
  }
}
