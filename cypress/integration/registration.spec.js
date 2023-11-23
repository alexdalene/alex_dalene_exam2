describe('User Registration', () => {
  it('can create a user with the correct email', () => {
    cy.visit('/auth');

    cy.get('input[name=username]').type('test_user');

    cy.get('input[name=email]').type('test.user@stud.noroff.no');

    cy.get('input[name=password]').type('testpassword123');

    cy.get('#submitBtn').click();

    cy.contains('Log In');
  });
});
