describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login('albertobasalo@hotmail.com');
    cy.get('h1').click();
    cy.get('nav > a').click({ force: true });
  });
  it('should display a form', () => {
    cy.get('form').should('exist');
  });
  it('the submit button should be disabled ', () => {
    cy.get('[type="submit"]').should('be.disabled');
  });
  it('the submit button should enabled after filling the form ', () => {
    cy.get('input[name="name"]').type('New item name');
    cy.get('input[name="description"]').type('New item description');
    cy.get('input[name="url"]').type('http://localhost');
    cy.get('select[name="categoryId"]').select('books');
    cy.get('input[name="price"]').type('0');
    cy.get('[type="submit"]').should('not.be.disabled');
  });
});
