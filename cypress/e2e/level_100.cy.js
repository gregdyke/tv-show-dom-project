describe('Spec for level 100', () => {
  it('shows 73 episodes', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.contains("Got 73 episode(s)");
  });
});