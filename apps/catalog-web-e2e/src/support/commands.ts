// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string): void;
  }
}

Cypress.Commands.add('login', (email) => {
  cy.get('input[name="email"]').type(email);
  cy.get('button')
    .contains('Send me a token')
    .click()
    .then(() => {
      cy.url().should('contain', 'activate');
      cy.get('button').contains('Activate me').click();
    });
});
