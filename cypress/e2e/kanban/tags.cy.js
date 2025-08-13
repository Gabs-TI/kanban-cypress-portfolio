Cypress.Commands.add('adicionarTag', (atividade, tagNome) => {
  cy.contains(atividade)
    .parent()
    .within(() => {
      cy.contains('div', /\+ Adicionar Tag|\+ Add Tag/)
        .should('be.visible')
        .click();

      cy.get('input[placeholder="Nova Tag"], input[placeholder="New Tag"]')
        .should('be.visible')
        .type(`${tagNome}{enter}`);

      cy.contains(tagNome).should('exist');
    });
});
