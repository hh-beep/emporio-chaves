import { Component, inject, OnInit } from '@angular/core';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { ItensService } from '../../../service/itens.service';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';




@Component({
  selector: 'app-itens',
  imports: [
    MenuBarComponent,
    ButtonModule,
    AsyncPipe,
  ],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss'
})




export class ItensComponent implements OnInit {


  private service = inject(  ItensService  );
  listaItens$ = this.service.listarItens();


  ngOnInit(): void {
    console.log(  this.listaItens$  );
  }
}
