describe('User Flow', () => {
  it('lets an unregistered user search through listings', () => {
    cy.visit('/browse');

    cy.wait(1000);

    cy.get('#input-search').type('test');

    cy.get('#input-search').should('value', 'test');
  });
});
