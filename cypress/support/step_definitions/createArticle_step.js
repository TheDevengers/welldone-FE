/* global Given, When, Then, cy */
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

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
  cy.visit('/login');
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
    .type('What is LitElement / LitHTML?', { delay: 100 });
  cy.get('[data-cy=article-intro]')
    .type('LitElement makes it easy to define Web Components – ideal for sharing elements across your organization or building a UI design system.');
  cy.get('[data-cy=article-image]')
    .type('https://cdn.auth0.com/blog/logos/polymer-project.png');
  cy.get('[data-cy=article-content]')
    .type('LitElement’s simple, familiar development model makes it easier than ever to build Web Components. Express your UI declaratively, as a function of state. No need to learn a custom templating language – you can use the full power of JavaScript in your templates. Elements update automatically when their properties change.');
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
