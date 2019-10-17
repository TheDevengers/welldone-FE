/* global Given, When, Then, cy */
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
  cy.visit('/login');
});

Before(() => {
  cy.server();
  cy.route('GET', '/api/v1/categories', 'fixture:categories')
    .as('categoriesRequest');
  cy.route('GET', '/api/v1/articles', 'fixture:articles')
    .as('articlesRequest');
  cy.route('POST', '/api/v1/articles', 'fixture:postarticle')
    .as('create');
});

Given('An existing user in the app', () => {
  cy.login();
  cy.url().should('be', '/');
  cy.wait('@articlesRequest');
  cy.get('[data-cy=list-items]').should('have.length', 3);
});

When('He clicks on create article icon', () => {
  cy.get('[data-cy=create-article]').click();
});

Then('He see the create article form', () => {
  cy.url().should('be', 'create-article');
  cy.wait('@categoriesRequest');
});

Then('He fill in the form and send it', () => {
  cy.get('[data-cy=article-title]')
    .type('Titulo nuevo', { delay: 100 });
  cy.get('[data-cy=article-intro]')
    .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
  cy.get('[data-cy=article-image]')
    .type('https://cdn.auth0.com/blog/logos/polymer-project.png');
  cy.get('[data-cy=article-content]')
    .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus');
  cy.get('[data-cy=category-checkbox-1]').click();
  cy.get('[data-cy=create-article-btn]').click();
});

Then('The list of articles increase in one', () => {
  cy.route('GET', '/api/v1/articles', 'fixture:articlesaftercreate')
    .as('articlesRequestAfterCreate');
  cy.wait('@create');
  cy.url().should('be', '/');
  cy.wait('@articlesRequestAfterCreate');
  cy.get('[data-cy=list-items]').should('have.length', 4);
});
