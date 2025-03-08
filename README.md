# Servidor MCP do Supabase

Este é um servidor MCP (Model-Controller-Persistence) que fornece uma API RESTful para interagir com o Supabase.

## Funcionalidades

- Consulta de dados de tabelas
- Consulta de registros específicos
- Inserção de dados
- Atualização de dados

## Configuração

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Copie o arquivo `.env.example` para `.env` e preencha com suas credenciais do Supabase:
   ```bash
   cp .env.example .env
   ```

## Uso

Para iniciar o servidor:
```bash
npm start
```

### Endpoints

- **GET /api/:table** - Lista todos os registros de uma tabela
  - Query params:
    - `select`: campos a serem retornados (opcional)

- **GET /api/:table/:id** - Obtém um registro específico por ID

- **POST /api/:table** - Insere um novo registro
  - Body: objeto com os dados a serem inseridos

- **PATCH /api/:table/:id** - Atualiza um registro existente
  - Body: objeto com os campos a serem atualizados

## Exemplos de Uso

### Listar todos os registros de uma tabela
```bash
curl http://localhost:3000/api/users
```

### Listar registros com campos específicos
```bash
curl http://localhost:3000/api/users?select=id,name,email
```

### Obter um registro específico
```bash
curl http://localhost:3000/api/users/123
```

### Inserir um novo registro
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "João", "email": "joao@exemplo.com"}'
```

### Atualizar um registro
```bash
curl -X PATCH http://localhost:3000/api/users/123 \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva"}'
```