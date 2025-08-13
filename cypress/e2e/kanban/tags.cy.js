describe('Kanban - Tags', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Cria uma tag', () => {
    cy.criarTag('Urgente');
    cy.contains('Urgente').should('exist');
  });

  it('Não permite alterar cor pela interface (bug conhecido)', () => {
    cy.criarTag('Teste Cor');
    // Aqui manteremos como observação/placeholder, pois depende do DOM real.
  });

  it('Não há exclusão de tags via UI (bug conhecido)', () => {
    cy.criarTag('Teste Excluir');
    // Placeholder para quando a funcionalidade existir.
  });
});
