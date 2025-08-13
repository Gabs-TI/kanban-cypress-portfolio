// Requer o plugin @4tw/cypress-drag-drop (carregado em cypress/support/e2e.js)
describe('Kanban - Movimentação (Drag & Drop)', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.criarLista('To Do');
    cy.criarLista('In Progress');
    cy.criarLista('Done');
    cy.criarAtividade('To Do', 'Atividade 1');
  });

  it('Move card de To Do para In Progress', () => {
    // Tenta arrastar pelo texto do card até a lista com título "In Progress"
    cy.contains('Atividade 1')
      .trigger('mousedown', { which: 1 });
    cy.contains('In Progress')
      .trigger('mousemove')
      .trigger('mouseup', { force: true });
    // Validação genérica: o card agora deve ser visível na área de In Progress
    cy.contains('In Progress').parent().contains('Atividade 1').should('exist');
  });

  it('Permite salto direto To Do → Done (registra comportamento atual)', () => {
    cy.contains('Atividade 1')
      .trigger('mousedown', { which: 1 });
    cy.contains('Done')
      .trigger('mousemove')
      .trigger('mouseup', { force: true });
    cy.contains('Done').parent().contains('Atividade 1').should('exist');
  });
});
