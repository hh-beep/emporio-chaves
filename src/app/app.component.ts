import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToastModule,      //  ~ Modulo de Mensagem aplicando de forma Global
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [  MessageService  ]     //  ~ Nao tenho ctz se precisa, mas importa aq do mesmo jeito...
})



export class AppComponent {
  title = 'emporio-chaves';
}
