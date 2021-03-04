import { getTitle } from '../support/app.po';

describe('catalog-web', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the Title', () => {
    getTitle().contains('Angular Builders');
  });
  it('should log in', () => {
    cy.login('albertobasalo@hotmail.com');
  });
});
