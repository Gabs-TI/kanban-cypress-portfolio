/// <reference types="cypress" />

describe('Kanban - Movimentação', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.criarLista('To Do');
    cy.criarLista('In Progress');
    cy.criarLista('Done');
    cy.criarAtividade('Atividade Teste', 'To Do');
  });

  it('Move uma atividade entre listas', () => {
    cy.contains('Atividade Teste')
      .drag('[data-list-name="In Progress"]'); // ajuste o seletor conforme o site
    cy.contains('In Progress').parent().contains('Atividade Teste').should('exist');
  });
});
