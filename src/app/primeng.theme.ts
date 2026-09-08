// src/theme/my-aura-theme.ts
//import { definePreset } from '@primeng/themes';
//import Aura from '@primeng/themes/aura';

import {  definePreset  } from "@primeuix/themes"
import Aura  from "@primeuix/themes/aura";




//  ~ Taquei na IA para transformar a paleta de cores neste preset daqui
export const MyCustomTheme = definePreset(Aura, {
  primitive: {
    // Defina aqui suas cores "cruas" para reutilização interna se necessário
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316', // Seu Laranja Principal
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407'
    },
    yellow: {
      500: '#facc15' // Seu Amarelo
    },
    zinc: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7', // Seu Cinza Claro
      300: '#d4d4d8', // Seu Cinza Médio
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b'  // Seu Preto Quase Puro
    }
  },
  semantic: {
    primary: {
      color: '{orange.500}',
      contrastColor: '#ffffff',
      hoverColor: '{orange.600}',
      activeColor: '{orange.700}'
    },
    highlight: {
      background: '{orange.50}',
      focusBackground: '{orange.100}',
      color: '{orange.950}',
      focusColor: '{orange.950}'
    },
    mask: {
      background: 'rgba(0, 0, 0, 0.4)',
      color: '#ffffff'
    },
    formField: {
      hoverBorderColor: '{primary.color}',
      focusBorderColor: '{primary.color}'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
        },
        primary: {
          color: '{orange.500}',
          contrastColor: '#ffffff',
          hoverColor: '{orange.600}',
          activeColor: '{orange.700}'
        },
        text: {
          color: '{zinc.950}',
        }
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{zinc.950}',
          100: '{zinc.900}',
          200: '{zinc.800}',
          300: '{zinc.700}',
          400: '{zinc.600}',
          500: '{zinc.500}',
          600: '{zinc.400}',
          700: '{zinc.300}',
          800: '{zinc.200}',
          900: '{zinc.100}',
          950: '{zinc.50}'
        },
        primary: {
          color: '{orange.400}',
          contrastColor: '{zinc.950}',
          hoverColor: '{orange.300}',
          activeColor: '{orange.200}'
        },
        text: {
          color: '{zinc.50}',
        }
      }
    }
  }
});
