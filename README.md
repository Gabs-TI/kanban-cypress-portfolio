# Portfólio Cypress — Kanban App

Testes E2E com Cypress para **https://kanban-dusky-five.vercel.app/**.

## Estrutura
```
kanban-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── kanban/
│   │   │   ├── listas.cy.js
│   │   │   ├── atividades.cy.js
│   │   │   ├── movimentacao.cy.js
│   │   │   └── tags.cy.js
│   ├── fixtures/
│   │   └── dados.json
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

## Como usar (PC novo)
1. **Instalar Node.js** (LTS): https://nodejs.org/
2. No terminal, dentro da pasta do projeto:
   ```bash
   npm install
   npm run cypress:open   # GUI
   # ou
   npm run cypress:run    # headless
   ```

## Observações
- Ajuste seletores nos testes caso o DOM do app seja diferente.
- `.gitignore` já evita subir `node_modules` e artefatos do Cypress.
