# 💰 Web Financeiro

> Um sistema moderno e robusto para gestão financeira pessoal.

Este projeto é uma solução completa para controle de finanças, construído com as tecnologias mais recentes do mercado, focando em performance, escalabilidade e uma excelente experiência de usuário.

## 🚀 Tecnologias

### Frontend (Web)

Desenvolvido com foco em modernidade e componentização:

- **[Next.js 16](https://nextjs.org/)** (App Router & Server Actions)
- **[React 19](https://react.dev/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)** para estilização
- **[Radix UI](https://www.radix-ui.com/)** para componentes acessíveis
- **[Lucide React](https://lucide.dev/)** para ícones
- **NextAuth.js** para autenticação
- **Axios** para comunicação HTTP

### Backend (API)

Uma API poderosa e performática:

- **[.NET 10](https://dotnet.microsoft.com/)** (Preview/Latest)
- **ASP.NET Core Web API**
- **C#**

## 📂 Estrutura do Projeto

O repositório opera como um **monorepo**, organizando o código em:

- `/frontend`: Aplicação web (Client/Server components, Hooks, Services).
- `/backend`: API RESTful e lógica de negócios.

## 🛠️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [.NET SDK](https://dotnet.microsoft.com/download) (versão 10 ou superior)

### Passo a Passo

#### 1. Backend

Navegue até a pasta do backend e execute a API:

```bash
cd backend
dotnet run
```

#### 2. Frontend

Em um novo terminal, navegue até a pasta do frontend, instale as dependências e rode o servidor:

```bash
cd frontend
npm install
npm run dev
```

Acesse a aplicação em: `http://localhost:3000`

## ✨ Funcionalidades

- **Autenticação Segura**: Login e proteção de rotas.
- **Dashboard Financeiro**: Visão clara de receitas e despesas.
- **Interface Responsiva**: Design adaptável para desktop e mobile.
- **Componentes Reutilizáveis**: Arquitetura limpa utilizando Shadcn/Radix UI patterns.

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).
