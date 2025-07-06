describe('Product Details Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="view-details-button"]').first().click(); // now the back button has history
  });

  it('displays product title, price and description', () => {
    cy.get('[data-testid="product-title"]').should('exist');
    cy.get('[data-testid="product-price"]').should('contain', '₹');
    cy.get('[data-testid="product-description"]').should('exist');
  });

  it('adds item to cart from detail page', () => {
    cy.get('[data-testid="add-to-cart-button"]').click();
    cy.get('[data-testid="cart-badge"]').should('not.have.text', '0');
  });

  it('navigates back to home page', () => {
    cy.get('[data-testid="back-button"]').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});
