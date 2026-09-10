import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';


//  ~ Rotas
import { routes } from './app.routes';
import { provideRouter, withHashLocation } from '@angular/router';

// ~ Libs nescessarias pro Primeng e Angular MDB
import {  provideAnimations  } from '@angular/platform-browser/animations';
import {  providePrimeNG  } from "primeng/config";
import { MyCustomTheme } from './primeng.theme';    //  ~ Custom tema







export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(  routes, withHashLocation()  ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),

    providePrimeNG({
      theme: {
        preset: MyCustomTheme,
        options: {
          prefix: 'p',                  // Prefixo das variáveis CSS (--p-primary-color)
          darkModeSelector: false,  // Classe para ativar modo escuro
          colorScheme: 'dark'
        }
      }
    }),
  ]
};
