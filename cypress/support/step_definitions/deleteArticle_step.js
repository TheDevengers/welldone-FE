/* global Given, When, Then, cy */
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
  cy.visit('/login');
});

Before(() => {
  cy.server();
  cy.route('GET', '/api/v1/articles', 'fixture:articles')
    .as('articlesRequest');
  cy.route({
    url: '/api/v1/articles/56',
    method: 'DELETE',
    status: 204,
  }).as('delete');
});

Given('An existing user on the main view', () => {
  cy.login();
  cy.url().should('be', '/');
  cy.wait('@articlesRequest');
});

When('He clicks on delete article icon', () => {
  cy.get('[data-cy=list-items]').should('have.length', 3);
  cy.get('[data-cy=delete-article-56]').click();
});

Then('The list of articles decrease in one', () => {
  cy.wait('@delete');
  cy.get('[data-cy=list-items]').should('have.length', 2);
});
