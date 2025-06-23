
# API Express com Swagger
Esta é uma API RESTfull construída com Node.js e Express, documentada com Swagger.
## Instalação
1. Clone o repositório

2. Instale as dependências:
> npm install

## Executando a aplicação 
> npm start

### criar um arquivo .env com as configuraçãoes
APP_KEY_TOKEN= ''
//Informação de conexão com o banco de dados
DATABASE_HOST= ''
DATABASE_USER= ''
DATABASE_SENHA= ''
DATABASE= ''
DATABASE_PORT= ''
SALT_ROUNDS=
PARSE_INT_BASE=
PORT= 3000
HOST= localhost
HOST_FRONT=localhost
### Os script MYSQL
> src/ecommece.sql
## Acessando a documentação

Após iniciar o servidor, acesse:
-  **Documentação Swagger**: http://localhost:3000/api-docs
-  **API Base**: http://localhost:3000

## Endpoints disponíveis
### Login
-  `Post /login` - autenticação para acesso no sistema
### Categoria
-  `GET /categorias` - Lista todas as catregorias
## Estrutura do projeto
 src
 |── config /
 |		└── *.js
 |── controllers/
 |	    └── *.js
 |── database
 |	    └── syncforce.js
 |── model
 |── routes/
 |     └── *.js # Todas as Rotas
 |── utils
 |── ecommece.sql //scriptbanco
├── package.json # Dependências
 .env
 README.md # Este arquivo
 .gitingnore
 server.js  # Arquivo principal
 sync.js

## Tecnologias utilizadas
 -  **Node.js** - Runtime JavaScript

-  **Express** - Framework web

-  **Swagger JSDoc** - Geração de documentação

-  **Swagger UI Express** - Interface da documentação

# Servidor Express
Servidor back-end feito com Node.js e Express.

### acresentar no package.json para o import do express em ver do require
### "type": "module",
## Ultilizando o Jsonwebtoken para gera tokend ealtentição.
> **npm install jsonwebtoken**
# Ultilizando o dotenv para carregar as variavel de ambiente
> **npm install dotenv**
# Intalação do cookie-parser para encapculamento de autenticação
>  **npm install express cookie-parser**