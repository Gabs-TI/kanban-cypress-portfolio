// Comandos customizados para evitar repetição de código nos testes
// OBS: Ajuste seletores conforme o DOM do app caso necessário.

Cypress.Commands.add('criarLista', (nome) => {
  cy.get('input[placeholder="Nova Lista"], input[placeholder="New List"]').type(`${nome}{enter}`);
});

Cypress.Commands.add('criarAtividade', (nomeLista, nomeAtividade) => {
  // Encontra a lista pelo título e digita no input de nova atividade
  cy.contains(/To Do Pré Produção|To Do|In Progress|Done|Lista|List|${nomeLista}/)
    .closest('.list, .lista, [data-list], section, div')
    .find('input[placeholder="Nova Atividade"], input[placeholder="New Task"]')
    .type(`${nomeAtividade}{enter}`);
});

Cypress.Commands.add('criarTag', (nome) => {
  cy.get('input[placeholder="Nova Tag"], input[placeholder="New Tag"]').type(`${nome}{enter}`);
});
