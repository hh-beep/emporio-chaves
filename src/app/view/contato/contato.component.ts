import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';





@Component({
  selector: 'app-contato',
  imports: [
    HeaderComponent
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})



export class ContatoComponent {
  contatos: Array<{  id: number, name: string, link: string  }> = [
    {  id: 0, name: "WhatsApp", link: "https://wa.me/5545998324447"  },
    {  id: 1, name: "Instagram", link: "https://www.instagram.com/chaveiro_emporio_das_chaves"  },
    {  id: 2, name: "Facebook", link: "https://www.facebook.com/people/Chaveiro-Ediel/100077278734305/#"  },
    {  id: 3, name: "Google Maps", link: "https://maps.app.goo.gl/Q8aJkktdJwuvgXRf9"  },
  ]
}
