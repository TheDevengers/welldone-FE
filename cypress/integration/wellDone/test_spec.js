/* global cy */
describe('WellDone login', () => {
  it('Load login page', () => {
    cy.visit('/login');
  });

  it('When an existing user logs in', () => {
    cy.get('[data-cy=username-field]')
    .type('usertest', { delay: 100 });
    cy.get('[data-cy=password-field]')
    .type('kevin1234', { delay: 100 });
    cy.get('[data-cy=submit]')
    .click()
    .url().should('be', '/');
  });
});
