/* global Given, When, Then, cy */
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
  cy.visit('/login');
});

Before(() => {
  cy.server();
  // cy.route('GET', '/api/v1/users/2', 'fixture:profile')
  // .as('profileRequest');
  cy.route('GET', '/api/v1/articles', 'fixture:articles')
  .as('articlesRequest');
});

Given('An existing user looged into the app', () => {
  cy.login();
  // cy.wait('@profileRequest');
  cy.url().should('be', '/');
});

When('He clicks on edit profile button', () => {
  cy.get('[data-cy=edit-profile-btn]').click();
});

Then('He edit his name and surname and send it', () => {
  cy.url().should('be', '/edit-profile');
  cy.get('[data-cy=first-name-label]').clear()
  .type('Nuevo nombre', { delay: 100 });
  cy.get('[data-cy=last-name-label]').clear()
    .type('apellido aqui', { delay: 100 });
  cy.get('[data-cy=image-user-label]').clear().type('https://i.kym-cdn.com/photos/images/original/000/970/542/3cd.jpg');
  cy.get('[data-cy=description-label]').clear().type('Lorem ipsum doldfor sit ameconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  cy.get('[data-cy=birth-place-label]').clear().type('Madrid');
  cy.route('GET', '/api/v1/users/2', 'fixture:editedprofile')
  .as('editedProfile');
  cy.get('[data-cy=profile-form-btn]').click();
});

Then('He see his new profile information', () => {
  cy.url().should('be', '/');
  cy.wait('@editedProfile');
  cy.get('[data-cy=profile-name-surname-label]').contains('Nuevo nombre apellido aqui');
});
