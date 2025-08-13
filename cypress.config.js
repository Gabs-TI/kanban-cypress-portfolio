const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kanban-dusky-five.vercel.app/',
    supportFile: 'cypress/support/e2e.js', // <-- garante que o support é carregado
    setupNodeEvents(on, config) {
      // eventos
    },
  },
});

