/// <reference types="cypress" />

import '@4tw/cypress-drag-drop';

// Comando para criar uma lista
Cypress.Commands.add('criarLista', (nome) => {
  cy.contains('div', /Adicionar outra lista|Add another list/)
    .should('be.visible')
    .click();

  cy.get('div.custom-input input[type="text"]')
    .should('be.visible')
    .type(`${nome}{enter}`);

  cy.contains(nome, { timeout: 10000 }).should('exist'); // Confirma que a lista foi criada
});

// Comando para criar uma atividade dentro de uma lista
Cypress.Commands.add('criarAtividade', (nomeTarefa, lista = 'Lista de Teste') => {
  // Encontra o título da lista e pega o container da lista
  cy.contains('h1', lista, { timeout: 10000 })
    .closest('div[id$="CreateTask"]') // seleciona o container que tem o botão de criar tarefa
    .within(() => {
      cy.contains('div.custom-input', 'Adicionar Tarefa')
        .should('be.visible')
        .click();

      cy.get('div.custom-input input[type="text"]', { timeout: 10000 })
        .should('be.visible')
        .type(`${nomeTarefa}{enter}`);

      cy.contains(nomeTarefa, { timeout: 10000 }).should('exist'); // Confirma que a atividade foi criada
    });
});


// Comando para adicionar uma tag a uma atividade
Cypress.Commands.add('adicionarTag', (atividade, tagNome) => {
  cy.contains(atividade, { timeout: 10000 })
    .parent()
    .within(() => {
      cy.contains('div.custom-input', 'Adicionar nova Tag')
        .should('be.visible')
        .click();

      cy.get('div.custom-input input[type="text"]', { timeout: 10000 })
        .should('be.visible')
        .type(`${tagNome}{enter}`);

      cy.contains(tagNome, { timeout: 10000 }).should('exist'); // Confirma que a tag foi criada
    });
});
