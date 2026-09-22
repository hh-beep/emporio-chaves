# Empório das Chaves - Front-End

> 🎓 Projeto acadêmico desenvolvido para a disciplina de **[Front-End com Framework e Projeto Integrador]** no curso de **Eng. de Software** - **Uniamérica**.

Este repositório contém o frontend da aplicação para o **Empório das Chaves**, construído com Angular, PrimeNG e Tailwind CSS. O projeto está em desenvolvimento contínuo ao longo do semestre, evoluindo de um protótipo funcional para uma aplicação completa, já consumindo uma API REST própria.

## 🛠️ Tecnologias Utilizadas

- **Framework:** Angular 19 (Standalone Components, sem NgModules)
- **Linguagem:** TypeScript
- **UI Kit:** PrimeNG + PrimeIcons (tema customizado em `primeng.theme.ts`)
- **Estilização:** Tailwind CSS 4 + SASS/SCSS
- **Ícones extras:** Font Awesome
- **Roteamento:** Angular Router, com **Hash Location Strategy** (`withHashLocation()`)
- **Formulários:** Reactive Forms
- **Requisições HTTP:** `HttpClient`, em uma camada `Repository` (chamada à API) separada da camada `Service` (regras de negócio)
- **Estado local:** Angular Signals (uso pontual, ex.: `ItemStorageService`)
- **Deploy:** GitHub Pages, via `angular-cli-ghpages`
- **Versionamento:** Git

> ℹ️ **Angular Material + CDK** e **mdb-angular-ui-kit** ainda constam nas dependências, mas foram descontinuados em favor do PrimeNG — não são mais usados no código atual. `chart.js` também está instalado para uso futuro (dashboards/relatórios), ainda sem implementação.

### Por que Hash Location?
O deploy é feito em GitHub Pages, que serve apenas arquivos estáticos. 
Com roteamento padrão (`PathLocationStrategy`), um refresh (F5) ou acesso direto a uma rota interna (ex.: `/sistema/itens`) resulta em 404, pois o servidor tenta localizar um arquivo com esse caminho. Usando `withHashLocation()`, tudo após o `#` é resolvido no client pelo Angular Router e nunca chega ao servidor, evitando o problema sem precisar de configuração extra no GitHub Pages.


## 📁 Estrutura do Projeto

```text
src/
├── app/
│   ├── models/                    # Interfaces de Request/Response (login, itens, categorias, usuário)
│   ├── repository/                # Camada de acesso à API (HttpClient puro)
│   ├── service/                   # Regras de negócio, orquestra repositories e estado local
│   ├── view/                      # Views por feature
│   │   ├── home/                  # Landing page pública (com subcomponentes banner/ e location/)
│   │   ├── catalogo/              # Catálogo público de produtos
│   │   ├── servicos/              # Página de serviços
│   │   ├── contato/               # Página de contato
│   │   ├── login/                 # Formulário de autenticação (Reactive Forms)
│   │   ├── error/                 # Páginas de erro dinâmicas (/error/:errorCode)
│   │   ├── shared/                # Componentes reutilizáveis globais (ex.: header/)
│   │   └── sistema/                # Área logada (dashboard), com rotas filhas:
│   │       ├── inicio/            #   Dashboard inicial
│   │       ├── itens/             #   Listagem de itens
│   │       ├── itens-adicionar/   #   Cadastro de item
│   │       ├── editar-item/       #   Edição de item (/sistema/itens/editar/:id)
│   │       ├── categorias/        #   Listagem de categorias
│   │       ├── categorias-adicionar/  # Cadastro de categoria
│   │       ├── categorias-editar/     # Edição de categoria (/sistema/categorias/editar/:id)
│   │       ├── usuario/           #   Perfil do usuário logado
│   │       ├── usuario-admin/     #   Administração de usuários
│   │       └── shared/menu-bar/   #   Menu lateral/topo da área logada
│   ├── app.component.*            # Shell raiz da aplicação
│   ├── app.config.ts              # Providers globais (Router, HttpClient, Animations, PrimeNG, etc.)
│   ├── app.routes.ts               # Configuração central de rotas
│   └── primeng.theme.ts           # Tema customizado do PrimeNG
├── assets/                        # Imagens, ícones, arquivos estáticos
├── enviroments/                   # Variáveis de ambiente (dev/prod)
├── index.html                     # Entry point HTML
├── main.ts                        # Bootstrap da aplicação (bootstrapApplication)
└── styles.scss                    # Estilos globais + imports do Tailwind
```

## 🔌 Integração com API

A autenticação e o CRUD de itens/categorias/usuários **já consomem uma API REST própria** (não mais mock em `localStorage` como nas versões iniciais). A URL base fica em `src/enviroments/enviroments.ts`:

```ts
export const enviroment = {
  production: true,
  apiUrl: 'http://localhost:8080'
}
```

> ⚠️ A sessão do usuário logado (retorno do login) ainda é persistida no `localStorage` no client, para manter o estado entre reloads — isso é esperado e não é mock, é apenas cache local da sessão.

## ⚙️ Pré-requisitos e Instalação

Certifique-se de ter instalado:
- Node.js >= 20.x
- Angular CLI >= 19.x

```bash
# Clone o repositório
git clone https://github.com/hh-beep/emporio-chaves.git

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
ng serve

# Acesse em http://localhost:4200
```

Certifique-se de que o back-end esteja rodando em `http://localhost:8080` (ou ajuste `apiUrl` em `enviroments.ts`) para que login e as telas do `/sistema` funcionem.

Ou acesse a versão publicada no GitHub Pages:
👉 https://hh-beep.github.io/emporio-chaves/

## 🗺️ Rotas principais

| Rota | Descrição |
|---|---|
| `/home` | Landing page pública |
| `/catalogo` | Catálogo público |
| `/servicos` | Página de serviços |
| `/contato` | Página de contato |
| `/login` | Autenticação |
| `/sistema/inicio` | Dashboard (área logada) |
| `/sistema/itens` | CRUD de itens |
| `/sistema/categorias` | CRUD de categorias |
| `/sistema/usuario` | Perfil do usuário |
| `/sistema/usuario/admin` | Administração de usuários |
| `/error/:errorCode` | Página de erro dinâmica |

## 🚧 Roadmap / Pendências conhecidas

- [ ] **Route Guards** (`CanActivateFn`) para proteger de fato a área `/sistema` na navegação (hoje a checagem de login ocorre dentro do componente, não bloqueia o acesso à rota em si)
- [ ] **HttpInterceptor** para anexar token/tratar erros de API de forma centralizada
- [ ] Ativar `chart.js` para dashboards/relatórios em `/sistema/inicio`
- [ ] Remover dependências não utilizadas (`@angular/material`, `@angular/cdk`, `mdb-angular-ui-kit`) caso não sejam retomadas

## 👥 Equipe

| Nome | Papel | GitHub |
|------|-------|--------|
| Henrique F. Pantaleão | Frontend | [@hh-beep](https://github.com/hh-beep) |
| Christian F. Duarte | Backend / API | [@chrisdev-eng](https://github.com/chrisdev-eng) |
| Daniel Correa | Banco / API / Testes | [@pentecost-js](https://github.com/pentecost-js) |
