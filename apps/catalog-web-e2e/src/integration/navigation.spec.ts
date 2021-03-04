describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('h1').click();
  });

  const categories = 'ab-home-categories > section > ab-ui-card > article';
  const featured = 'ab-home-featured > section > ab-ui-card > article';
  it('should display categories', () => {
    cy.get('h3').contains('Categories');
    cy.get(categories).should('have.length.above', 1);
  });
  it('should navigate to a category page', () => {
    cy.get(categories).find('a').first().click({ force: true });
    cy.url().should('contain', 'category');
  });
  it('should navigate to an item page with the name included in url', () => {
    cy.get(featured)
      .find('h3')
      .first()
      .invoke('text')
      .then((itemText) => {
        cy.get(featured).find('h3').first().click({ force: true });
        const itemName = itemText.toLowerCase().trim();
        cy.url().should('contain', itemName);
      });
  });
});
