import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemStorageService } from '../../service/item-storage.service';
import { HeaderComponent } from '../shared/header/header.component';



@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})



export class CatalogoComponent {
  storage = inject(ItemStorageService);




}
