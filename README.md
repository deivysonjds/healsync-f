# healsync-f
projeto front-end das cadeiras de projeto integrador e programação front-end do 3° período do curso de sistemas para internet pela Unicap

# 🏥 Plataforma de Gerenciamento de Atendimentos

Uma aplicação web moderna para **gerenciar o fluxo de atendimentos**, **cadastro de pacientes** e **funcionários** em instituições de saúde. Desenvolvida com **React.js**, **Next.js** e **Zustand** para uma experiência rápida, eficiente e escalável.

---

## 📌 Funcionalidades Principais

- 📋 Cadastro de **pacientes**
- 👨‍⚕️ Gestão de **funcionários** (médicos, recepcionistas, etc.)
- 🗂️ Controle e acompanhamento dos **atendimentos**
- 🔒 Controle de acesso e permissões por tipo de usuário (ex: administrador, atendente)

---

## 🛠️ Tecnologias Utilizadas

- **[React.js](https://reactjs.org/)** — Biblioteca principal da interface
- **[Next.js](https://nextjs.org/)** — Framework React
- **[Zustand](https://github.com/pmndrs/zustand)** — Gerenciamento de estado leve e escalável
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilização com utilitários
- **React Hook Form + Zod** — Validação e controle de formulários

---

## 📁 Estrutura de Pastas

📦src
┣ 📂components → Componentes reutilizáveis
┣ 📂app → Rotas da aplicação (Next.js)
┣ 📂store → Arquivos do Zustand para gerenciamento de estado
┣ 📂services → Integração com APIs
┗ 📂schemas → formulários com zod



---

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js (v18+)
- Yarn ou npm

### Passos

```bash
# Clone o repositório
git clone https://github.com/deivysonjds/healsync-f.git
cd cd front-healsync

# Instale as dependências
yarn install
# ou
npm install

# Rode o servidor de desenvolvimento
yarn dev
# ou
npm run dev


🔐 Autenticação
A plataforma pode inclui login com autenticação por JWT (token), protegendo rotas específicas conforme o perfil do usuário. O controle de sessão e autenticação é feito via:

Context API

Token armazenado de forma segura ( cookies )
