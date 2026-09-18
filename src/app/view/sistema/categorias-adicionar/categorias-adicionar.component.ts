import { Component, inject, OnInit } from '@angular/core';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CategoriasService } from '../../../service/categorias.service';
import { CategoriaRequestModel } from '../../../models/categoriasRequest.model';
import { ToggleSwitchModule } from 'primeng/toggleswitch';





@Component({
  selector: 'app-categorias-adicionar',
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
  templateUrl: './categorias-adicionar.component.html',
  styleUrl: './categorias-adicionar.component.scss',
  providers: [  MessageService  ]
})





export class CategoriasAdicionarComponent implements OnInit  {


  //  ~ Services
  private router = inject(  Router  );
  private messageService = inject(  MessageService  );
  private categoriasService = inject(  CategoriasService  );


  isLoading: boolean = false;



  //  ~ forms
  formCategoria = new FormGroup({
    nome: new FormControl('', {  nonNullable: true  }),
    ativo: new FormControl(true, {  nonNullable: true  })
  })




  ngOnInit(): void {

  }





  criarCategoria() {
    if (  this.formCategoria.valid  ) {

      const cacheDados = this.formCategoria.value;


      this.categoriasService.criarCategoria(  cacheDados as CategoriaRequestModel  ).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Categoria criada com sucesso!'
          });

          setTimeout(  () => {  this.router.navigate(['/sistema/categorias'])  }, 800  );
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Problema ao criar...' + err
          });


          setTimeout(  () => {  this.router.navigate(['/sistema/categorias'])  }, 800  );
        }
      });


    }
  }
}
