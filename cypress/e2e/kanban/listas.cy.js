/// <reference types="cypress" />

describe('Kanban - Listas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Cria uma nova lista', () => {
    cy.criarLista('Lista Teste');
    cy.contains('Lista Teste').should('exist');
  });

  it('Altera o nome de uma lista', () => {
    cy.criarLista('Lista Alterar');
    cy.contains('Lista Alterar')
      .dblclick()
      .clear()
      .type('Lista Alterada{enter}');
    cy.contains('Lista Alterada').should('exist');
  });

  it('Exclui uma lista', () => {
    cy.criarLista('Lista Excluir');
    cy.contains('Lista Excluir')
      .parent()
      .within(() => {
        cy.contains('button', '🗑').click();
      });
    cy.contains('Lista Excluir').should('not.exist');
  });
});
