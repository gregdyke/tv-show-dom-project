describe('Spec for level 100', () => {
  it('shows 73 episodes', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get("#root").children().should('have.length', 73);
    cy.get("#root").children().first().contains("Winter is Coming");
    cy.get("#root").children().first().contains("S01E01");
    cy.get("#root").children().first().find("img").should('have.attr', 'src', 'http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg');
    cy.get("#root").children().first().contains("Lord Eddard Stark, ruler of the North");
  });
});