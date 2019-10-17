/* global Given, When, Then, cy */
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:3000/';
Given('An existing user on the login view', () => {
  cy.visit(`${url}Login`);
});

When('He writes his data', () => {
  cy.get('[data-cy=username-field]')
    .type('usertest', { delay: 100 });
  cy.get('[data-cy=password-field]')
    .type('kevin1234', { delay: 100, log: false });
});

Then('He clicks on login', () => {
  cy.get('[data-cy=submit]')
    .click();
});

Then('He see the main view of the app', () => {
  cy.url().should('be', '/');
});