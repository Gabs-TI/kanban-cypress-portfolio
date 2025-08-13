Cypress.Commands.add('criarLista', (nome) => {
  cy.contains('div', /Adicionar outra lista|Add another list/)
    .should('be.visible')
    .click();

  cy.get('input[placeholder="Nova Lista"], input[placeholder="New List"]')
    .should('be.visible')
    .type(`${nome}{enter}`);

  cy.contains(nome).should('exist');
});
