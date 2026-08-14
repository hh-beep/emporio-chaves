import {  Component  } from '@angular/core';
import { Router } from '@angular/router';


//  ~ Components
import {  HeaderComponent  } from '../shared/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { LocationComponent } from './location/location.component';





@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    BannerComponent,
    LocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})



export class HomeComponent {}
