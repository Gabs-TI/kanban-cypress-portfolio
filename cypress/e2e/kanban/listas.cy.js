describe('Kanban - Listas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Cria uma nova lista', () => {
    cy.criarLista('Teste Lista');
    cy.contains('Teste Lista').should('be.visible');
  });

  it('Edita o nome da lista', () => {
    cy.criarLista('Lista Original');
    cy.contains('Lista Original').dblclick();
    cy.focused().clear().type('Lista Alterada{enter}');
    cy.contains('Lista Alterada').should('be.visible');
  });

  it('Exclui uma lista (valida ausência de confirmação)', () => {
    cy.criarLista('Lista a Excluir');
    // Tenta clicar em possíveis ícones/botões de exclusão
    cy.contains('Lista a Excluir')
      .parent()
      .find('button, .delete, .delete-icon, [aria-label="Excluir"], [aria-label="Delete"]')
      .first()
      .click({ force: true });
    cy.contains('Lista a Excluir').should('not.exist');
  });
});
