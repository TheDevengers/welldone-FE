/* global Given, When, Then, cy */
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://www.welldone.space/';

/**
 * Scenario 1
 */
Given('An user visit the public web', () => {
  cy.visit(url);
});

Then('I see the articles of all users', () => {
  cy.get('.article__list > article').its('length') .should('be.gt', 1);
});

/**
 * Scenario 2
 */
Given('A user in the public web', () => {
  cy.visit(url);
});

When('When I click on categories label', () => {
  cy.get('.justify-content-center > li:nth-child(2)').click();
});

Then('I see all categories', () => {
  cy.url().should('be', `${url}categories/`);
  cy.get('.categories > div').its('length') .should('be.gt', 1);
});

/**
 * Scenario 3
 */
Given('An user in the public web', () => {
  cy.visit(url);
});

When('When I click in authors label', () => {
  cy.get('.justify-content-center > li:nth-child(3)').click();
});

Then('I see all authors', () => {
  cy.url().should('be', `${url}authors/`);
  cy.get('.authors__name > div').its('length') .should('be.gt', 1);
});

/**
 * Scenario 4
 */
Given('An user visit the public web', () => {
  cy.visit(url);
});

When('When I click on authors label', () => {
  cy.get('.justify-content-center > li:nth-child(3)').click();
});

Then('I want to search {string} author', (author) => {
  cy.url().should('be', `${url}authors/`);
  cy.get('#author').type(author, { delay: 100 });
  cy.get('.authors > form > .button-form').click();
});

Then('I see only that author', () => {
  cy.get('.authors__name > div').its('length') .should('eq', 1);
});

/**
 * Scenario 5
 */
Given('An user that want to search an article', () => {
  cy.visit(url);
});

When('When I searh an article of {string}', (articleName) => {
  cy.get('#search').type(articleName, { delay: 100 }).type('{enter}');
});

Then('I see one article of {string} user', (userName) => {
  cy.get('.article__list > article').its('length') .should('eq', 1);
  cy.get('.article__list > article > small > a ').contains(userName);
  cy.url().should('be', `${url}?search=stencil`);
});
