describe('User Authentication', () => {
  const userInfo = {
    name: 'test_user',
    email: 'test.user@stud.noroff.no',
    password: 'password123',
  };

  it('lets user register, login and logout', () => {
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

    cy.intercept('POST', 'https://api.noroff.dev/api/v1/auction/auth/login', {
      status: 'success',
    }).as('loginRequest');

    cy.get('#form-login').within($form => {
      cy.get('#login-email').type(userInfo.email);
      cy.get('#login-password').type(userInfo.password);
      cy.root().submit();
    });

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.url().should('include', '/profile');

    cy.get('#btn-logout').click();

    cy.url().should('not.include', '/profile');
  });

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
});
