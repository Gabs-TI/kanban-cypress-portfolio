/// <reference types="cypress" />

import '@4tw/cypress-drag-drop';

// Comando para criar uma lista
Cypress.Commands.add('criarLista', (nome) => {
  cy.contains('div', /Adicionar outra lista|Add another list/)
    .should('be.visible')
    .click();

  cy.get('input[placeholder="Nova Lista"], input[placeholder="New List"]', { timeout: 10000 })
    .should('be.visible')
    .type(`${nome}{enter}`);

  cy.contains(nome, { timeout: 10000 }).should('exist'); // Confirma que a lista foi criada
});

// Comando para criar uma atividade dentro de uma lista
Cypress.Commands.add('criarAtividade', (nome, lista = 'To Do') => {
  cy.contains(lista, { timeout: 10000 })
    .parent()
    .within(() => {
      cy.contains('div', /\+ Adicionar Tarefa|\+ Add Task/)
        .should('be.visible')
        .click();

      cy.get('input[placeholder="Nova Atividade"], input[placeholder="New Task"]', { timeout: 10000 })
        .should('be.visible')
        .type(`${nome}{enter}`);

      cy.contains(nome, { timeout: 10000 }).should('exist'); // Confirma que a atividade foi criada
    });
});

// Comando para adicionar uma tag a uma atividade
Cypress.Commands.add('adicionarTag', (atividade, tagNome) => {
  cy.contains(atividade, { timeout: 10000 })
    .parent()
    .within(() => {
      cy.contains('div', /\+ Adicionar Tag|\+ Add Tag/)
        .should('be.visible')
        .click();

      cy.get('input[placeholder="Nova Tag"], input[placeholder="New Tag"]', { timeout: 10000 })
        .should('be.visible')
        .type(`${tagNome}{enter}`);

      cy.contains(tagNome, { timeout: 10000 }).should('exist'); // Confirma que a tag foi criada
    });
});
