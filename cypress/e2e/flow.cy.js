describe('User Flow', () => {
  it('lets an unregistered user search through listings', () => {
    cy.intercept(
      'GET',
      'https://api.noroff.dev/api/v1/auction/listings?_bids=true&_active=true&sort=created',
    ).as('listingRequest');

    cy.visit('/browse/');

    cy.wait('@listingRequest').its('response.statusCode').should('eq', 200);

    cy.get('#input-search').type('test');

    cy.get('#input-search').should('value', 'test');
  });
});
