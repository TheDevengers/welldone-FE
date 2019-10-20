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
});

Given('An user into home page', () => {
  cy.login();
  cy.url().should('be', '/');
  cy.wait('@articlesRequest');
});

When('He clicks on edit article button', () => {
  cy.route('GET', '/api/v1/articles/56', 'fixture:articleDetail')
    .as('articleDetail');
  cy.get('[data-cy=edit-article-56]').click();
});

Then('He edit the title, introduction and categories of the article', () => {
  cy.url().should('be', '/edit-article/56');
  cy.wait('@articleDetail');
  cy.wait('@categoriesRequest');
  cy.get('[data-cy=edit-title-item]').clear()
  .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
  cy.get('.css-1g48xl4-IndicatorsContainer').click();
  cy.get('#react-select-2-option-1').click();
  cy.get('#react-select-2-option-3').click();
  cy.get('#react-select-2-option-4').click();
  cy.get('.css-1g48xl4-IndicatorsContainer').click();
  cy.route('GET', '/api/v1/articles', 'fixture:articlesAfterEdit')
  .as('articlesAfterEdit');
  cy.get('[data-cy=edit-item-btn]').click();
});

Then('He seeing in the home page the articles and the edited article', () => {
  cy.url().should('be', '/');
  cy.wait('@articlesAfterEdit');
  cy.get('[data-cy=article-56-title]').contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
  cy.get('[data-cy=btn-container]').its('length').should('eq', 3);
});
