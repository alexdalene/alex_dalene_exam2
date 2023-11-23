describe('User Registration', () => {
  it('successfully registers a user', () => {
    // Stubbing the POST request
    cy.intercept(
      'POST',
      'https://api.noroff.dev/api/v1/auction/auth/register',
      {
        statusCode: 200,
        body: {
          name: 'test_user',
          email: 'test.user@stud.noroff.no',
          password: 'password123',
          avatar: null,
        },
      },
    ).as('registerRequest');

    // Registration Form
    cy.visit('/auth');
    cy.get('input[name="name"]').type('test_user');
    cy.get('input[name="email"]').type('test.user@stud.noroff.no');
    cy.get('input[name="password"]').type(`testpassword123`);
    cy.contains('Submit').click();

    cy.wait('@registerRequest');
    cy.contains('Login');
  });

  it('cannot create a user with an invalid email', () => {
    cy.visit('/auth');

    cy.get('input[name="name"]').type('test_user');

    cy.get('input[name="email"]').type('test.user@invalid.no');

    cy.get('input[name="password"]').type(`testpassword123{enter}`);

    cy.contains('Register');
  });

  it('can go directly to login', () => {
    cy.visit('/auth');

    cy.get('#login-link').click();

    cy.contains('Login');
  });
});
