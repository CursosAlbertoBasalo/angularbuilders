import { getTitle } from '../support/app';

describe('catalog-web', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the Title', () => {
    getTitle().contains('Angular Builders');
  });
  it('should log in', () => {
    cy.login('albertobasalo@hotmail.com');
  });
});
