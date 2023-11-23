describe('User Login', () => {
  const userInfo = {
    name: 'test_user',
    password: 'password123',
  };

  it('successfully lets a registered user log in', () => {
    cy.intercept('POST', 'https://api.noroff.dev/api/v1/auction/auth/login', {
      status: 'success',
    }).as('loginRequest');

    cy.visit('/auth');
    cy.get('#login-link').click();

    cy.get('#form-login').within($form => {
      cy.get('#name').type(userInfo.name);
      cy.get('#password').type(userInfo.password);
      cy.root().submit();
    });

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.url().should('include', '/profile');
  });
});
