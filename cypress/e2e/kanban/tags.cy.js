/// <reference types="cypress" />

describe('Kanban - Tags', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.criarLista('Lista Teste');
    cy.criarAtividade('Atividade Teste', 'Lista Teste');
  });

  it('Adiciona uma tag à atividade', () => {
    cy.adicionarTag('Atividade Teste', 'Urgente');
    cy.contains('Atividade Teste')
      .parent()
      .contains('Urgente')
      .should('exist');
  });
});
