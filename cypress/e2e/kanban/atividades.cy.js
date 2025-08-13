/// <reference types="cypress" />

describe('Kanban - Atividades', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.criarLista('Lista Teste');
  });

  it('Cria uma atividade', () => {
    cy.criarAtividade('Atividade Teste', 'Lista Teste');
    cy.contains('Atividade Teste').should('exist');
  });

  it('Altera o nome da atividade', () => {
    cy.criarAtividade('Atividade Alterar', 'Lista Teste');
    cy.contains('Atividade Alterar')
      .dblclick()
      .clear()
      .type('Atividade Alterada{enter}');
    cy.contains('Atividade Alterada').should('exist');
  });

  it('Exclui uma atividade', () => {
    cy.criarAtividade('Atividade Excluir', 'Lista Teste');
    cy.contains('Atividade Excluir')
      .parent()
      .within(() => {
        cy.contains('button', '🗑').click();
      });
    cy.contains('Atividade Excluir').should('not.exist');
  });
});
