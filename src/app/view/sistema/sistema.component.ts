import { Component, inject } from '@angular/core';

import { HeaderComponent } from '../shared/header/header.component';
import { Router, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-sistema',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './sistema.component.html',
  styleUrl: './sistema.component.scss'
})




export class SistemaComponent {


}
