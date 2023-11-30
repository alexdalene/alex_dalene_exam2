describe('User Authentication', () => {
  const userInfo = {
    name: 'sherlock',
    email: 'sherlock@stud.noroff.no',
    password: 'password123',
  };

  it('lets a user register', () => {
    cy.intercept(
      'POST',
      'https://api.noroff.dev/api/v1/auction/auth/register',
    ).as('registerRequest');

    cy.visit('/auth#signup');

    cy.wait(500);

    cy.get('#form-register').within($form => {
      cy.get('#register-name').type(userInfo.name);
      cy.get('#register-email').type(userInfo.email);
      cy.get('#register-password').type(userInfo.password);
      cy.root().submit();
    });

    cy.wait('@registerRequest').its('response.statusCode').should('eq', 400);
  });

  it('lets a registered user log in', () => {
    cy.intercept('POST', 'https://api.noroff.dev/api/v1/auction/auth/login').as(
      'loginRequest',
    );

    cy.visit('/auth#login');
    cy.wait(500);

    cy.get('#form-login').within($form => {
      cy.get('#login-email').type(userInfo.email);
      cy.get('#login-password').type(userInfo.password);
      cy.root().submit();
    });

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.url().should('include', '/profile');
  });

  it('lets a user log out', () => {
    cy.intercept('POST', 'https://api.noroff.dev/api/v1/auction/auth/login', {
      status: 'success',
    }).as('loginRequest');

    cy.visit('/auth#login');
    cy.wait(500);

    cy.get('#form-login').within($form => {
      cy.get('#login-email').type(userInfo.email);
      cy.get('#login-password').type(userInfo.password);
      cy.root().submit();
    });

    cy.url().should('include', '/profile');

    cy.get('#btn-logout').click();

    cy.url().should('include', '/auth');
  });

  // it('validates form fields on submit', () => {
  //   cy.intercept('POST', 'https://api.noroff.dev/api/v1/auction/auth/login').as(
  //     'loginRequest',
  //   );

  //   cy.visit('/auth#login');
  //   cy.wait(100);

  //   cy.get('#form-login').within($form => {
  //     cy.get('#login-email').type('invalid@email.com');
  //     cy.get('#login-password').type('invalidpassword');
  //     cy.root().submit();
  //   });

  //   cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);

  //   cy.url().should('not.include', '/profile');
  // });
});
