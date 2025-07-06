describe('Cart Page Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="add-to-cart-button"]').first().click();
    cy.get('[data-testid="cart-icon"]').click();
  });

  it('shows cart items with correct quantity and total', () => {
    cy.get('[data-testid="cart-item"]').should('have.length.greaterThan', 0);
    cy.get('[data-testid="cart-total"]').should('contain', '₹');
  });

  it('updates quantity in cart', () => {
    cy.get('[data-testid="increase-qty"]').click();
    cy.get('[data-testid="item-qty"]').should('contain', '2');
  });

  it('disables removal but shows quantity adjustment', () => {
    cy.get('[data-testid="remove-button"]').should('not.exist');
    cy.get('[data-testid="decrease-qty"]').should('exist');
  });
});
