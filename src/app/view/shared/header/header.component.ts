import {  Component  } from '@angular/core';
import {  Router  } from '@angular/router';






@Component({
  selector: 'app-header',
  imports: [
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})









export class HeaderComponent {


  constructor(private router: Router) {}


  links = [
    {  id: 0, path: ['home'], text: 'Homepage'  },
    {  id: 1, path: ['catalogo'], text: 'Catálogo'  },
    {  id: 2, path: ['contato'], text: 'Contato'  },
    {  id: 3, path: ['login'], text: 'Login'  },
  ]



  navigatePath(  path: Array<string> ) {
    this.router.navigate(  path  );
  }
}
