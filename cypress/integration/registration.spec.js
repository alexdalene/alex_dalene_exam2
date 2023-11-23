describe('User Registration', () => {
  const userInfo = {
    name: 'test_user',
    email: 'test.user@stud.noroff.no',
    password: 'password123',
  };

  it('registers user with a @stud.noroff.no email', () => {
    cy.intercept(
      'POST',
      'https://api.noroff.dev/api/v1/auction/auth/register',
      {
        status: 'success',
      },
    ).as('registerRequest');

    cy.visit('/auth');

    cy.get('#form-register').within($form => {
      cy.get('#register-name').type(userInfo.name);
      cy.get('#register-email').type(userInfo.email);
      cy.get('#register-password').type(userInfo.password);
      cy.root().submit();
    });

    cy.wait('@registerRequest').its('response.statusCode').should('eq', 200);

    cy.contains('Login');
  });

  it('correctly handles error cases', () => {
    cy.intercept(
      'POST',
      'https://api.noroff.dev/api/v1/auction/auth/register',
      {
        statusCode: 400,
      },
    ).as('registerRequest');

    cy.visit('/auth');

    cy.get('#form-register').within($form => {
      cy.get('#register-name').type(userInfo.name);
      cy.get('#register-email').type(userInfo.email);
      cy.get('#register-password').type(userInfo.password);
      cy.root().submit();
    });

    cy.wait('@registerRequest').its('response.statusCode').should('eq', 400);

    cy.contains('Register');
  });
});
