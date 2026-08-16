# Emporio das Chaves - Front-End

> 🎓 Projeto acadêmico desenvolvido para a disciplina de **[Nome da Matéria]** no curso de **[Nome do Curso]** - **[Nome da Instituição]**.

Este repositório contém o frontend da aplicação **[Nome do Sistema]**, construído com Angular, Tailwind CSS e SASS. O projeto está em desenvolvimento contínuo ao longo do semestre, evoluindo de um protótipo funcional para uma aplicação completa.

## 🛠️ Tecnologias Utilizadas

- **Framework:** Angular 18+ (Standalone Components)
- **Estilização:** Tailwind CSS + SASS/SCSS
- **Linguagem:** TypeScript
- **Gerenciamento de Estado:** Signals / RxJS
- **Roteamento:** Angular Router (Guards funcionais)
- **Formulários:** Reactive Forms
- **Versionamento:** Git
- **Ambientes:** Angular Environments (dev/prod)

## 📁 Estrutura do Projeto

```text
src/
├── app/
│   ├── models/              # Interfaces e tipos (LoginFormModel.ts)
│   ├── service/             # Serviços globais (login.service.ts)
│   ├── view/                # Módulos de visualização por feature
│   │   ├── contato/         # Página de contato
│   │   ├── error/           # Páginas de erro dinâmicas (/error/:code)
│   │   ├── home/            # Landing page pública
│   │   ├── login/           # Formulário de autenticação
│   │   ├── shared/          # Componentes UI reutilizáveis entre views
│   │   └── sistema/         # Área protegida (dashboard após login)
│   ├── app.component.*      # Shell raiz da aplicação
│   ├── app.config.ts        # Providers globais (HttpClient, etc.)
│   └── app.routes.ts        # Configuração central de rotas
├── assets/                  # Imagens, ícones, arquivos estáticos
├── environments/            # Variáveis de ambiente (dev/prod)
├── index.html               # Entry point HTML
├── main.ts                  # Bootstrap da aplicação
└── styles.scss              # Estilos globais + imports Tailwind
```




## ⚙️ Pré-requisitos e Instalação
Certifique-se de ter instalado:
Node.js >= 18.x
Angular CLI >= 18.x


```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
ng serve

# Acesse em http://localhost:4200


# Ou, Acesse via o github pages em:
https://hh-beep.github.io/emporio-chaves/
```



### 🔐 Credenciais de Teste (Mock)

| Email | Senha | Perfil |
|-------|-------|--------|
| admin@texte.com | 123456 | Administrador |
| user@texte.com | 123456 | Usuário Comum |

> ⚠️ Autenticação atual usa `localStorage` como mock. Migração para API REST planejada para próximas entregas.



## 👥 Equipe

| Nome | Papel | GitHub |
|------|-------|--------|
| [Henrique F. Pantaleão] | Frontend | [@hh-beep](https://github.com/hh-beep) |
| [Christian F. Duarte ] | Backend / API | [@chrisdev-eng](https://github.com/chrisdev-eng) |
| [Daniel Correa] | Banco / API / Testes | [@pentecost-js](https://github.com/pentecost-js) |
