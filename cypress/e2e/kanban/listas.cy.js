/// <reference types="cypress" />

describe('Kanban - Listas, Atividades e Tags', () => {
  beforeEach(() => {
    // Acesse o site antes de cada teste
    cy.visit('https://kanban-dusky-five.vercel.app/');
  });

  it('Deve criar uma nova lista', () => {
    cy.criarLista('Lista de Teste');
  });

  it('Deve criar uma nova atividade dentro de uma lista', () => {
    // Primeiro cria a lista, se ainda não existir
   // cy.criarLista('Lista de Atividades');

    // Cria a atividade dentro dessa lista
    cy.criarAtividade('Atividade de Teste', 'Lista de Teste');
  });

  it('Deve adicionar uma tag a uma atividade', () => {
    // Primeiro cria a lista e a atividade
    //cy.criarLista('Lista com Tag');
    cy.criarAtividade('Atividade com Tag', 'Lista de Teste');

    // Adiciona a tag
    cy.adicionarTag('Atividade com Tag', 'Importante');
  });
});

