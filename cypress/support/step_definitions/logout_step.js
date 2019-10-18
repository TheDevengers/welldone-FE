/* global Given, When, Then, cy */
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
  cy.visit('/login');
});

Given('I logged into the app', () => {
  cy.login();
  cy.url().should('be', '/');
});

When('I click the logout button', () => {
  cy.get('[data-cy=logout-btn]').click()
});

Then('My session is closed and I go to the login view', () => {
  cy.url().should('be', '/login');
});
