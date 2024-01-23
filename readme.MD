<h1 align="center" style="font-weight: bold;">Projeto em NodeJS com Express.js 🚀 </h1>


O projeto abordou diversos tópicos essenciais para o desenvolvimento de uma aplicação web com o framework Express.js. Abaixo estão os principais aprendizados:

## Tópicos:
1. [Introdução ao Desenvolvimento com Express](#1-introdução-ao-desenvolvimento-com-express)
2. [Implementação de Rotas em uma API](#2-implementação-de-rotas-em-uma-api)
3. [CRUD com Express e HTTP Methods](#3-crud-com-express-e-http-methods)
4. [Testando Requisições com Postman](#4-testando-requisições-com-postman)
5. [Manipulação de Dados em uma API](#5-manipulação-de-dados-em-uma-api)
6. [Bancos de Dados: SQL vs NoSQL](#6-bancos-de-dados-sql-vs-nosql)
7. [Modelo e Esquema no Desenvolvimento de API](#7-modelo-e-esquema-no-desenvolvimento-de-api)
8. [Relacionamento de Dados no MongoDB](#8-relacionamento-de-dados-no-mongodb)

---


## 1. Introdução ao Desenvolvimento com Express 🛠️:

O projeto começou com uma introdução ao Express.js, um framework para Node.js amplamente utilizado para desenvolver aplicações web e APIs. A configuração básica do Express, a criação de um servidor HTTP e a gestão de requisições e respostas foram os primeiros passos.

~~~javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
~~~
---

## 2. Implementação de Rotas em uma API 🛣️
- foram exploradas as técnicas de criação de rotas em uma API, conectando diferentes partes da aplicação e entendendo como as rotas são fundamentais na lógica de uma REST API;
~~~javascript 
app.get('/api/usuarios', (req, res) => {
  // Lógica para obter todos os usuários
  res.send('Lista de usuários');
});
~~~
---

## 3. CRUD com Express e HTTP Methods 📝
- a implementação de um CRUD (Create, Read, Update, Delete) foi abordada utilizando os métodos HTTP GET, POST, PUT e DELETE do Express. Cada método foi associado a uma função específica para manipular as requisições.
~~~javascript 
app.post('/api/usuarios', (req, res) => {
  // Lógica para criar um novo usuário
  res.send('Novo usuário criado');
});
~~~
---

## 4. Testando Requisições com Postman 🧪
A ferramenta Postman foi introduzida para testar e validar as requisições feitas à API. É possível verificar as diferentes partes de uma requisição HTTP, entender o funcionamento e garantir a correta implementação dos endpoints.

---

## 5. Manipulação de Dados em uma API 🔄:
Foi explorada a integração de bancos de dados com a API, abordando o armazenamento de dados recebidos e processados pela aplicação. A persistência de informações é fundamental para o funcionamento de qualquer sistema.

---

## 6. Bancos de Dados: SQL vs NoSQL 🗃️:
As principais diferenças entre bancos de dados SQL e NoSQL foram discutidas, proporcionando uma compreensão mais ampla sobre os casos de uso ideais para cada tipo de banco de dados.

---

## 7. Modelo e Esquema no Desenvolvimento de API 📚:
Os conceitos de modelo e esquema foram apresentados, destacando o papel fundamental de cada um na construção de uma API. Modelos são representações dos dados, enquanto esquemas definem a estrutura e as restrições dos dados.

---

## 8. Relacionamento de Dados no MongoDB 🔄:
Exploramos como funciona o relacionamento de dados em um banco de dados NoSQL, como o MongoDB, utilizando o modelo de incorporação (embedding) para estabelecer conexões entre documentos.
~~~javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comentarioSchema = new Schema({
  texto: String,
  autor: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  },
});

const postagemSchema = new Schema({
  titulo: String,
  conteudo: String,
  comentarios: [comentarioSchema],
});
~~~

---
Estes são os principais aprendizados obtidos durante o desenvolvimento deste projeto com Express.js. Cada tópico contribui para uma compreensão mais sólida do desenvolvimento de aplicações web e APIs utilizando o Express como framework principal.
