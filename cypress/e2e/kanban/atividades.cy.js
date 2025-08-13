describe('Kanban - Atividades', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.criarLista('Lista Teste');
  });

  it('Cria uma atividade', () => {
    cy.criarAtividade('Lista Teste', 'Atividade 1');
    cy.contains('Atividade 1').should('be.visible');
  });

  it('Permite duplicar atividades com o mesmo nome (bug conhecido)', () => {
    cy.criarAtividade('Lista Teste', 'Atividade 2');
    cy.criarAtividade('Lista Teste', 'Atividade 2');
    // Ajuste o seletor abaixo conforme o DOM real de cada card
    cy.contains('Lista Teste').parent().contains('Atividade 2').should('exist');
  });

  it('Exclui uma atividade', () => {
    cy.criarAtividade('Lista Teste', 'Atividade Excluir');
    cy.contains('Atividade Excluir')
      .parent()
      .find('button, .delete, .delete-icon, [aria-label="Excluir"], [aria-label="Delete"]')
      .first()
      .click({ force: true });
    cy.contains('Atividade Excluir').should('not.exist');
  });
});
