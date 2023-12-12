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

  it('lets a registered user log out', () => {
    cy.login('sherlock@stud.noroff.no', 'password123');

    cy.visit('/profile');

    cy.get('h1').should('contain', 'Profile');

    cy.get('#btn-logout').click();

    cy.url().should('not.include', '/profile');

    cy.get('h1').should('contain', 'Sign Up');
  });

  it('lets a registered user view their total credits', () => {
    cy.login('sherlock@stud.noroff.no', 'password123');

    cy.visit('/profile');

    cy.get('h1').should('contain', 'Profile');

    cy.get('#credits').should('contain', '$');
  });
});
