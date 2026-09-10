import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

//  ~ PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';




@Component({
  selector: 'app-home-banner',
  imports: [
    ButtonModule,
    CardModule,
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})



export class BannerComponent {

  //  ~ Mudança para Inject
  //constructor(private router: Router) {}
  private router = inject(  Router  );



  navigatePath(  path: Array<string>  ) {
    this.router.navigate(  path  )
  }
}
