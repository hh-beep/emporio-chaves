import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  constructor(private router: Router) {}


  navigatePath(  path: Array<string>  ) {
    this.router.navigate(  path  )
  }
}
