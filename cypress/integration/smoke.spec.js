describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/');
    cy.contains('Semester Project 2');
  });

  it('can view the profile page', () => {
    cy.visit('/user/profile');
    cy.contains('Your Profile');
  });

  it('can view the create a listing page', () => {
    cy.visit('/user/create-listing');
    cy.contains('Create a listing');
  });
});
