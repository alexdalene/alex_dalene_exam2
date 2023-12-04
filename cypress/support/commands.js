Cypress.Commands.add('login', (email, password) => {
  cy.session(email, () => {
    cy.request({
      method: 'POST',
      url: 'https://api.noroff.dev/api/v1/auction/auth/login',
      body: { email, password },
    }).then(({ body }) => {
      window.localStorage.setItem('token', body.accessToken);
      window.localStorage.setItem('username', body.name);
      window.localStorage.setItem('credits', body.credits);
    });
  });
});
