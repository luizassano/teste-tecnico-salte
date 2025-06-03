# Sistema de Gerenciamento de Produtos e Carrinho

## Demonstração em Vídeo
[![Vídeo de Demonstração](https://img.youtube.com/vi/N0Gs04v3qiQ/0.jpg)](https://youtu.be/N0Gs04v3qiQ)

Este é um projeto de e-commerce desenvolvido como teste técnico, utilizando NestJS no backend e Angular no frontend.

## Tecnologias

### Backend
- NestJS - Framework Node.js
- TypeORM para banco de dados
- MySQL como banco de dados
- Swagger para documentação
- Class Validator para validações
- CORS habilitado

### Frontend
- Angular 19
- Angular Material
- RxJS
- TypeScript
- SCSS
- Design responsivo

## Funcionalidades

### Backend
- API REST para produtos
- Validação de dados
- Busca e filtros
- Paginação
- Documentação automática
- Tratamento de erros

### Frontend
- Lista de produtos
- Busca em tempo real
- Carrinho de compras
- Interface responsiva
- Feedback visual
- Persistência local

## Como Executar

### Pré-requisitos
- Node.js 18+
- MySQL 8+
- npm ou yarn

### Banco de Dados
```sql
CREATE DATABASE products_db;
```

### Backend
```bash
cd backend
npm install
cp env.example .env
# Ajuste as variáveis no .env
npm run start:dev
```

Backend: http://localhost:3000
Swagger: http://localhost:3000/api

### Frontend
```bash
cd frontend
npm install
ng serve
```

Frontend: http://localhost:4200

## API

### Produtos
- GET /products - Lista produtos
- GET /products/:id - Busca produto
- POST /products - Cria produto
- PATCH /products/:id - Atualiza produto
- DELETE /products/:id - Remove produto

### Exemplo de Produto
```json
{
  "name": "Smartphone Samsung Galaxy",
  "description": "Smartphone com tela de 6.1 polegadas",
  "price": 1299.99,
  "image": "https://example.com/image.jpg"
}
```

## Interface

- Lista de produtos com grid
- Detalhes do produto
- Carrinho de compras
- Design responsivo
- Feedback visual
- Estados de loading

## Estrutura

```
├── backend/
│   ├── src/
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── products/
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── README-BACKEND.md
│
├── frontend/
│   ├── src/app/
│   │   ├── components/
│   │   ├── models/
│   │   ├── services/
│   │   └── app.routes.ts
│   └── README-FRONTEND.md
│
└── README.md
```

## Testes

### Backend
```bash
cd backend
npm run test
```

### Frontend
```bash
cd frontend
ng test
```

## Deploy

### Backend
1. Ajuste as variáveis de produção
2. npm run build
3. npm run start:prod

### Frontend
1. ng build --prod
2. Sirva a pasta dist/

## Validações

- Nome: obrigatório
- Descrição: obrigatória
- Preço: maior que zero
- Imagem: opcional (URL)

## Segurança

- Validação de dados
- Sanitização
- CORS
- Tratamento de erros

## Melhorias Futuras

- Autenticação
- Upload de imagens
- Categorias
- Avaliações
- Checkout
- Histórico

---

Projeto desenvolvido como teste técnico.