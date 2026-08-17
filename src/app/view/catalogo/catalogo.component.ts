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
  template: `

  <app-header />


  <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (item of storage.items(); track item.id) {
          <div
            class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col p-4"
          >
            <div class="flex items-start justify-between">
              <h3 class="text-lg font-semibold text-gray-800">
                {{ item.name }}
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                [class]="item.quant > 0
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'"
              >
                {{ item.quant > 0 ? 'Em estoque: ' + item.quant : 'Sem estoque' }}
              </span>
            </div>

            <p class="text-sm text-gray-500 mt-2 flex-grow">
              {{ item.desc }}
            </p>

          </div>
        } @empty {
          <p class="col-span-full text-center text-gray-400 py-10">
            Nenhum item salvo ainda.
          </p>
        }
      </div>
    </div>


  `
})



export class CatalogoComponent {
  storage = inject(ItemStorageService);
}
