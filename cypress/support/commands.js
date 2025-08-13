/// <reference types="cypress" />

import '@4tw/cypress-drag-drop';

// Comando para criar uma lista
Cypress.Commands.add('criarLista', (nome) => {
  // Clica no botão de nova lista
  cy.get('[data-testid="nova-lista"]', { timeout: 10000 }).click();

  // Espera o input aparecer e digita o nome
  cy.get('input[placeholder="Nova Lista"], input[placeholder="New List"]', { timeout: 10000 })
    .should('be.visible')
    .type(`${nome}{enter}`);
});

// Comando para criar uma atividade dentro de uma lista
Cypress.Commands.add('criarAtividade', (nome, lista = 'To Do') => {
  // Localiza a lista pelo título
  cy.contains(lista, { timeout: 10000 })
    .parent()
    .within(() => {
      // Clica no botão de nova atividade
      cy.get('[data-testid="nova-atividade"]').click();

      // Digita o nome da atividade e salva
      cy.get('input[placeholder="Nova Atividade"], input[placeholder="New Task"]')
        .should('be.visible')
        .type(`${nome}{enter}`);
    });
});

// Comando para adicionar uma tag a uma atividade
Cypress.Commands.add('adicionarTag', (atividade, tagNome) => {
  cy.contains(atividade, { timeout: 10000 })
    .parent()
    .within(() => {
      cy.get('[data-testid="adicionar-tag"]').click();
      cy.get('input[placeholder="Nova Tag"], input[placeholder="New Tag"]')
        .should('be.visible')
        .type(`${tagNome}{enter}`);
    });
});

