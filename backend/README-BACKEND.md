# Backend - API de Produtos

## Tecnologias Utilizadas

- **NestJS** - Framework Node.js
- **TypeORM** - ORM para banco de dados
- **MySQL** - Banco de dados
- **Swagger** - Documentação da API
- **Class Validator** - Validação de dados

## Configuração

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar banco de dados
- Crie um banco MySQL chamado `products_db`
- Configure as variáveis de ambiente baseadas no arquivo `env.example`

### 3. Executar a aplicação
```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:prod
```

## Endpoints da API

### Produtos

- `GET /products` - Listar produtos (com filtro e paginação)
- `GET /products/:id` - Buscar produto por ID
- `POST /products` - Criar novo produto
- `PATCH /products/:id` - Atualizar produto
- `DELETE /products/:id` - Deletar produto

### Parâmetros de Query para listagem:
- `search` - Buscar por nome ou descrição
- `page` - Número da página (padrão: 1)
- `limit` - Itens por página (padrão: 10)

## Documentação

A documentação completa da API está disponível em:
`http://localhost:3000/api`

## Estrutura do Projeto

```
src/
├── dto/                 # Data Transfer Objects
├── entities/           # Entidades do banco de dados
├── products/          # Módulo de produtos
│   ├── products.controller.ts
│   ├── products.service.ts
│   └── products.module.ts
├── app.module.ts      # Módulo principal
└── main.ts           # Arquivo de inicialização
```

## Validações

- Nome: obrigatório, string
- Descrição: obrigatória, string
- Preço: obrigatório, número maior que zero
- Imagem: opcional, string (URL)

## Tratamento de Erros

A API retorna erros padronizados com:
- Status HTTP apropriado
- Mensagem de erro em português
- Validações detalhadas para campos inválidos 