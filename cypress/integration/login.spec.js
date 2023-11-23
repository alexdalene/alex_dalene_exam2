describe('User Login', () => {
  const userInfo = {
    name: 'test_user',
    email: 'test.user@stud.noroff.no',
    password: 'password123',
  };

  it('lets a registered user directly log in', () => {
    cy.intercept('POST', 'https://api.noroff.dev/api/v1/auction/auth/login', {
      status: 'success',
    }).as('loginRequest');

    cy.visit('/auth');

    cy.get('#login-link').click();

    cy.get('#form-login').within($form => {
      cy.get('#login-email').type(userInfo.email);
      cy.get('#login-password').type(userInfo.password);
      cy.root().submit();
    });

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.url().should('include', '/profile');
  });

  it('correctly handles error cases', () => {
    cy.intercept('POST', 'https://api.noroff.dev/api/v1/auction/auth/login', {
      statusCode: 400,
    }).as('loginRequest');

    cy.visit('/auth');

    cy.get('#login-link').click();

    cy.get('#form-login').within($form => {
      cy.get('#login-email').type(userInfo.email);
      cy.get('#login-password').type(userInfo.password);
      cy.root().submit();
    });

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 400);

    cy.url().should('not.include', '/profile');
  });
});
