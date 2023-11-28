describe('User Flow', () => {
  it('lets an unregistered user search through listings', () => {
    cy.visit('/browse');

    cy.get('#input-search').type('test');

    cy.get('#input-search').should('value', 'test');
  });
});
