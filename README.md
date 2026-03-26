# User Management Dashboard

Projeto desenvolvido com **Next.js + TypeScript** consumindo uma API pública para exibir usuários em um painel.

## 📌 Objetivo

Este projeto foi criado com o objetivo de praticar conceitos importantes do desenvolvimento front-end moderno, como:

* Consumo de APIs
* Organização de projeto
* Componentização
* Tipagem com TypeScript
* Estrutura profissional de aplicações React/Next.js

A aplicação consome dados da API pública **JSONPlaceholder** para listar usuários em formato de cards.

---

## 🚀 Tecnologias utilizadas

* Next.js
* React
* TypeScript
* Tailwind CSS
* API JSONPlaceholder

---

## 📂 Estrutura do projeto

src/
├── app/
│ └── users/
│ └── page.tsx
│
├── components/
│ └── UserCard.tsx
│
├── services/
│ └── userService.ts
│
├── types/
│ └── User.ts

### Explicação da arquitetura

O fluxo da aplicação segue o padrão:

API → Services → Types → Components → Pages

* **Services**: responsável por consumir a API
* **Types**: define a tipagem dos dados recebidos
* **Components**: componentes reutilizáveis da interface
* **Pages**: páginas da aplicação

---

## 🔌 API utilizada

https://jsonplaceholder.typicode.com/users

A API retorna uma lista de usuários contendo informações como:

* Nome
* Email
* Telefone
* Empresa
* Website

---

## 📸 Funcionalidades atuais

* Listagem de usuários
* Renderização de cards com dados da API
* Estrutura organizada para escalabilidade

---

## 📈 Melhorias futuras

* Busca de usuários
* Página de detalhes do usuário
* Loading skeleton
* Paginação
* Dashboard com estatísticas

---

## 👩‍💻 Autora

Jessica Lyra
Desenvolvedora Web

LinkedIn: (adicione seu link aqui)
GitHub: (adicione seu GitHub aqui)
