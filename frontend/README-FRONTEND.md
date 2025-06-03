# Frontend - Aplicação Angular

Este é o frontend da aplicação de gerenciamento de produtos, desenvolvido com Angular 19.

## Tecnologias Utilizadas

- **Angular 19** - Framework frontend moderno
- **Angular Material** - Biblioteca de componentes UI
- **RxJS** - Programação reativa
- **TypeScript** - Linguagem tipada
- **SCSS** - Pré-processador CSS
- **Standalone Components** - Arquitetura moderna do Angular

## Funcionalidades

### Componentes Principais

1. **ProductListComponent** - Lista de produtos com busca e paginação
2. **ProductDetailComponent** - Detalhes do produto com opção de adicionar ao carrinho
3. **CartComponent** - Carrinho de compras com gerenciamento de itens
4. **HeaderComponent** - Navegação principal com contador do carrinho

### Serviços

1. **ProductService** - Comunicação com a API de produtos
2. **CartService** - Gerenciamento do estado do carrinho

## Configuração

### 1. Instalar dependências
```bash
npm install
```

### 2. Executar em desenvolvimento
```bash
ng serve
```

### 3. Build para produção
```bash
ng build
```

## Estrutura do Projeto

```
src/app/
├── components/          # Componentes da aplicação
│   ├── product-list/   # Lista de produtos
│   ├── product-detail/ # Detalhes do produto
│   ├── cart/          # Carrinho de compras
│   └── header/        # Navegação principal
├── models/            # Interfaces TypeScript
├── services/          # Serviços Angular
├── app.routes.ts      # Configuração de rotas
└── app.config.ts      # Configuração da aplicação
```

## Recursos Implementados

### UI/UX
- Design responsivo com Angular Material
- Feedback visual com snackbars
- Loading states
- Estados vazios informativos
- Navegação intuitiva

### Funcionalidades
- Busca de produtos em tempo real
- Paginação de resultados
- Carrinho persistente no localStorage
- Contador de itens no carrinho
- Gerenciamento de quantidades

### Validações
- Validação de formulários
- Tratamento de erros da API
- Feedback visual para o usuário

## Rotas

- `/` - Redireciona para `/products`
- `/products` - Lista de produtos
- `/product/:id` - Detalhes do produto
- `/cart` - Carrinho de compras

## Configuração da API

O frontend está configurado para se comunicar com a API em:
`http://localhost:3000`

Para alterar a URL da API, edite o arquivo:
`src/app/services/product.service.ts`

## Comandos Úteis

```bash
# Desenvolvimento
ng serve

# Build
ng build

# Testes
ng test

# Linting
ng lint

# Gerar componente
ng generate component nome-do-componente

# Gerar serviço
ng generate service nome-do-servico
```

## Dependências Principais

- `@angular/core` - Core do Angular
- `@angular/material` - Componentes Material Design
- `@angular/cdk` - Component Development Kit
- `@angular/animations` - Animações
- `rxjs` - Programação reativa

## Considerações de Performance

- Lazy loading de rotas
- OnPush change detection strategy
- Standalone components para melhor tree-shaking
- Otimização de bundles

## Acessibilidade

- Componentes Angular Material são acessíveis por padrão
- Uso adequado de ARIA labels
- Navegação por teclado
- Contraste adequado de cores 