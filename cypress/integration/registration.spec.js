describe('User Registration', () => {
  it('can create a user with the correct email', () => {
    cy.visit('/auth');

    cy.get('input[name="username"]').type('test_user');

    cy.get('input[name="email"]').type('test.user@stud.noroff.no');

    cy.get('input[name="password"]').type(`testpassword123{enter}`);

    cy.contains('Log In');
  });

  it('cannot create a user with an invalid email', () => {
    cy.visit('/auth');

    cy.get('input[name="username"]').type('test_user');

    cy.get('input[name="email"]').type('test.user@invalid.no');

    cy.get('input[name="password"]').type(`testpassword123{enter}`);

    cy.contains('Sign Up');
  });

  it('can go directly to login', () => {
    cy.visit('/auth');

    cy.get('#login-link').click();

    cy.contains('Log In');
  });
});
