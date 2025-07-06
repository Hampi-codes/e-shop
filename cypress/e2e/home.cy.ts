describe('Home Page - Product Listing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads product list', () => {
    cy.get('[data-testid="product-card"]').should('have.length.greaterThan', 0);
  });

  it('shows correct product title and price', () => {
    cy.get('[data-testid="product-title"]').first().should('exist');
    cy.get('[data-testid="product-price"]').first().should('contain', '₹');
  });

  it('navigates to product detail page on View Details click', () => {
    cy.get('[data-testid="view-details-button"]').first().click();
    cy.url().should('include', '/product/');
  });

  it('adds product to cart and updates badge count', () => {
    cy.get('[data-testid="add-to-cart-button"]').first().click();
    cy.get('[data-testid="cart-badge"]').should('not.have.text', '0');
  });
});
