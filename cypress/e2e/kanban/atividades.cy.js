Cypress.Commands.add('criarAtividade', (nome, lista = 'To Do') => {
  cy.contains(lista)
    .parent()
    .within(() => {
      cy.contains('div', /\+ Adicionar Tarefa|\+ Add Task/)
        .should('be.visible')
        .click();

      cy.get('input[placeholder="Nova Atividade"], input[placeholder="New Task"]')
        .should('be.visible')
        .type(`${nome}{enter}`);

      cy.contains(nome).should('exist');
    });
});
