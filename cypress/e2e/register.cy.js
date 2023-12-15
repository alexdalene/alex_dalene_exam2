describe('User Register', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://api.noroff.dev/api/v1/auction/auth/register',
    ).as('registerRequest');
  });

  it('lets a user register', () => {
    cy.visit('/auth#signup');

    cy.get('#register-name').type('testuser');
    cy.get('#register-email').type('testuser@stud.noroff.no');
    cy.get('#register-password').type(`testpassword{enter}`);

    cy.wait('@registerRequest').its('response.statusCode').should('eq', 400);
  });

  it('displays errors to the user', () => {
    cy.visit('/auth#signup');

    cy.get('#register-name').type('test.user');
    cy.get('#register-email').type('testuser@stud.noroff.no');
    cy.get('#register-password').type(`testpassword{enter}`);

    cy.get('#name-error').should(
      'contain',
      'Name must be between 5 and 20 characters',
    );
  });
});
