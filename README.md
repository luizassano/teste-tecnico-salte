# Sistema de Gerenciamento de Produtos e Carrinho

Este é um projeto completo de e-commerce com backend NestJS e frontend Angular, desenvolvido como teste técnico.

## 🚀 Tecnologias Utilizadas

### Backend (NestJS)
- **NestJS** - Framework Node.js moderno
- **TypeORM** - ORM para banco de dados
- **MySQL** - Banco de dados relacional
- **Swagger** - Documentação automática da API
- **Class Validator** - Validação de dados
- **CORS** - Configurado para desenvolvimento

### Frontend (Angular)
- **Angular 19** - Framework frontend moderno
- **Angular Material** - Biblioteca de componentes UI
- **RxJS** - Programação reativa
- **TypeScript** - Linguagem tipada
- **SCSS** - Pré-processador CSS
- **Responsive Design** - Layout adaptável

## 📋 Funcionalidades

### ✅ Backend
- [x] Cadastro de produtos com validação
- [x] Listagem de produtos com filtro e paginação
- [x] Busca por nome ou descrição
- [x] Operações CRUD completas
- [x] Tratamento de erros padronizado
- [x] Documentação Swagger automática
- [x] Validação de dados robusta

### ✅ Frontend
- [x] Lista de produtos com grid responsivo
- [x] Filtro de produtos em tempo real
- [x] Paginação de resultados
- [x] Detalhes do produto
- [x] Carrinho de compras funcional
- [x] Persistência do carrinho no localStorage
- [x] Interface moderna com Material Design
- [x] Navegação intuitiva
- [x] Feedback visual para o usuário

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- MySQL (versão 8 ou superior)
- npm ou yarn

### 1. Configuração do Banco de Dados
```sql
CREATE DATABASE products_db;
```

### 2. Backend (NestJS)
```bash
cd backend
npm install
cp env.example .env
# Configure as variáveis de ambiente no arquivo .env
npm run start:dev
```

O backend estará rodando em: `http://localhost:3000`
Documentação Swagger: `http://localhost:3000/api`

### 3. Frontend (Angular)
```bash
cd frontend
npm install
ng serve
```

O frontend estará rodando em: `http://localhost:4200`

## 📚 Documentação da API

### Endpoints Principais

#### Produtos
- `GET /products` - Listar produtos
  - Query params: `search`, `page`, `limit`
- `GET /products/:id` - Buscar produto por ID
- `POST /products` - Criar novo produto
- `PATCH /products/:id` - Atualizar produto
- `DELETE /products/:id` - Deletar produto

### Exemplo de Produto
```json
{
  "name": "Smartphone Samsung Galaxy",
  "description": "Smartphone com tela de 6.1 polegadas",
  "price": 1299.99,
  "image": "https://example.com/image.jpg"
}
```

## 🎨 Interface do Usuário

### Páginas Principais
1. **Lista de Produtos** - Grid responsivo com busca e paginação
2. **Detalhes do Produto** - Visualização completa com opção de adicionar ao carrinho
3. **Carrinho de Compras** - Gerenciamento de itens e quantidades

### Recursos de UX
- Design responsivo para mobile e desktop
- Feedback visual com snackbars
- Loading states
- Estados vazios informativos
- Navegação intuitiva

## 🔧 Estrutura do Projeto

```
├── backend/                 # API NestJS
│   ├── src/
│   │   ├── dto/            # Data Transfer Objects
│   │   ├── entities/       # Entidades TypeORM
│   │   ├── products/       # Módulo de produtos
│   │   ├── app.module.ts   # Módulo principal
│   │   └── main.ts         # Ponto de entrada
│   └── README-BACKEND.md   # Documentação do backend
│
├── frontend/               # Aplicação Angular
│   ├── src/app/
│   │   ├── components/     # Componentes da aplicação
│   │   ├── models/         # Interfaces TypeScript
│   │   ├── services/       # Serviços Angular
│   │   └── app.routes.ts   # Configuração de rotas
│   └── README-FRONTEND.md  # Documentação do frontend
│
└── README.md              # Este arquivo
```

## 🧪 Testes

### Backend
```bash
cd backend
npm run test
npm run test:e2e
```

### Frontend
```bash
cd frontend
ng test
ng e2e
```

## 🚀 Deploy

### Backend
1. Configure as variáveis de ambiente de produção
2. Execute `npm run build`
3. Execute `npm run start:prod`

### Frontend
1. Execute `ng build --prod`
2. Sirva os arquivos da pasta `dist/`

## 📝 Validações Implementadas

### Produto
- **Nome**: Obrigatório, string não vazia
- **Descrição**: Obrigatória, string não vazia
- **Preço**: Obrigatório, número maior que zero
- **Imagem**: Opcional, string (URL)

## 🔒 Segurança

- Validação de dados no backend e frontend
- Sanitização de inputs
- CORS configurado adequadamente
- Tratamento de erros sem exposição de dados sensíveis

## 🎯 Próximos Passos

- [ ] Autenticação e autorização
- [ ] Upload de imagens
- [ ] Categorias de produtos
- [ ] Sistema de avaliações
- [ ] Checkout e pagamento
- [ ] Histórico de pedidos

## 👨‍💻 Desenvolvedor

Projeto desenvolvido como teste técnico, demonstrando conhecimentos em:
- Desenvolvimento full-stack
- Arquitetura de software
- Boas práticas de código
- UI/UX moderno
- Documentação técnica

---

**Nota**: Este projeto foi desenvolvido com foco em demonstrar habilidades técnicas e boas práticas de desenvolvimento.