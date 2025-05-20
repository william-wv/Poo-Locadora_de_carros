
# 🚗 Sistema de Locadora de Carros - POO com TypeScript

Projeto desenvolvido como parte da disciplina de **Programação Orientada a Objetos (POO)** do curso de **Sistemas para Internet** na **UTFPR**.

Este sistema simula o funcionamento básico de uma locadora de carros, aplicando os princípios da POO e utilizando **TypeScript** como linguagem principal.

---

## 🧰 Tecnologias e Ferramentas Utilizadas

- **TypeScript** (TS)
- Node.js
- Paradigmas de **Programação Orientada a Objetos**: Classes, Herança, Polimorfismo, Encapsulamento
- TSC (TypeScript Compiler)
- Git e GitHub

---

## 📁 Estrutura do Projeto

```
src/
├── models/
│   ├── Carro.ts
│   ├── Cliente.ts
│   └── Locacao.ts
├── services/
│   └── LocadoraService.ts
├── index.ts
tsconfig.json
package.json
README.md
```

---

## 📦 Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Compile o TypeScript:**
   ```bash
   npx tsc
   ```

4. **Execute o projeto:**
   ```bash
   node dist/index.js
   ```

---

## ⚙️ Configuração do TypeScript

O projeto possui um arquivo `tsconfig.json` com as seguintes configurações básicas:

```json
{
  "compilerOptions": {
    "moduleResolution": "Node",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "types": [
      "node"
    ],
    "skipLibCheck": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

---

## 🧠 Funcionalidades Implementadas

- Cadastro de carros
- Cadastro de clientes
- Registro de locações
- Validação de disponibilidade de carros
- Relatório simples de carros locados

---

## 📚 Conceitos de POO Aplicados

- **Classes e Objetos**: Modelagem de entidades como `Carro`, `Cliente` e `Locacao`.
- **Encapsulamento**: Controle de acesso aos atributos via métodos.
- **Herança e Polimorfismo** : Exemplo com possíveis subclasses de veículos.
- **Abstração**: Separação da lógica de negócios em serviços.

---

## 👨‍🏫 Professor Responsável

Prof. Dr. Emerson André Fedechen,
UTFPR – Universidade Tecnológica Federal do Paraná  (Guarapuava)
Curso de Sistemas para Internet

---

## 📅 Semestre

📆 1º semestre de 2025

---

## 📄 Licença

Este projeto é de uso acadêmico e não possui fins comerciais.

---