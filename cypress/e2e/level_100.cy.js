describe('Spec for level 100', () => {
  it('shows 73 episodes', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get("#root").children().should('have.length', 73);
    cy.get("#root").children().first().contains("Winter is Coming").should('be.visible');
    cy.get("#root").children().first().contains("S01E01").should('be.visible');
  });
});