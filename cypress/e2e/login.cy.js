describe('User Log In', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.noroff.dev/api/v1/auction/auth/login').as(
      'loginRequest',
    );
  });

  it('lets a registered user log in', () => {
    cy.visit('/auth#login');

    cy.get('input[name=email]').type('sherlock@stud.noroff.no');
    cy.get('input[name=password]').type(`password123{enter}`);

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.url().should('include', '/profile');

    cy.get('h2').should('contain', 'sherlock');
  });

  it('displays errors to the user', () => {
    cy.visit('/auth#login');

    cy.get('input[name=email]').type('invaliduser@stud.noroff.no');
    cy.get('input[name=password]').type(`invalidpassword{enter}`);

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);

    cy.url().should('not.include', '/profile');

    cy.get('#password-error').should('contain', 'Invalid email or password');
  });
});
