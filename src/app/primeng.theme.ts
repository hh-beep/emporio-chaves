import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

export const MyCustomTheme = definePreset(Aura, {
  primitive: {
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316', // Laranja Principal
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407'
    },
    yellow: {
      500: '#facc15'
    },
    zinc: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b'
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
      background: 'rgba(249, 115, 22, 0.16)', // Laranja transparente para seleções
      focusBackground: 'rgba(249, 115, 22, 0.24)',
      color: '{orange.300}',
      focusColor: '{orange.200}'
    },
    mask: {
      background: 'rgba(0, 0, 0, 0.4)',
      color: '#ffffff'
    },
    formField: {
      background: '{zinc.900}', // Fundo dos inputs
      disabledBackground: '{zinc.800}',
      filledBackground: '{zinc.800}',
      filledHoverBackground: '{zinc.800}',
      filledFocusBackground: '{zinc.800}',
      borderColor: '{zinc.700}', // Borda sutil
      hoverBorderColor: '{primary.color}',
      focusBorderColor: '{primary.color}',
      color: '{zinc.50}',
      disabledColor: '{zinc.500}',
      placeholderColor: '{zinc.500}',
      invalidBorderColor: '{red.500}' // Certifique-se de ter vermelho nos primitives se usar isso, ou use uma cor fixa como '#ef4444'
    },
    colorScheme: {
      dark: {
        surface: {
          0: '{zinc.950}', // Fundo principal da aplicação
          50: '{zinc.900}',
          100: '{zinc.800}',
          200: '{zinc.700}',
          300: '{zinc.600}',
          400: '{zinc.500}',
          500: '{zinc.400}',
          600: '{zinc.300}',
          700: '{zinc.200}',
          800: '{zinc.100}',
          900: '{zinc.50}',
          950: '#ffffff'
        },
        primary: {
          color: '{orange.400}', // Laranja mais claro para contraste no escuro
          contrastColor: '{zinc.950}',
          hoverColor: '{orange.300}',
          activeColor: '{orange.200}'
        },
        text: {
          color: '{zinc.50}', // Texto principal claro
          mutedColor: '{zinc.500}', // Texto secundário/desativado
          hoverColor: '{zinc.0}',
          hoverMutedColor: '{zinc.400}'
        },
        content: {
          background: '{zinc.900}', // Fundo de cards/conteúdo
          hoverBackground: '{zinc.800}',
          borderColor: '{zinc.800}',
          color: '{zinc.50}'
        },
        overlay: {
          //selectBackground: '{zinc.800}',
          popover: {
            background: '{zinc.900}', // Fundo de dropdowns/dialogs
            borderColor: '{zinc.800}',
            color: '{zinc.50}'
          }
        }
      }
    }
  }
});
