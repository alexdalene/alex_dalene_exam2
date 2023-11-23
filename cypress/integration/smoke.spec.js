describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/');
    cy.contains('Semester Project 2');
  });

  it('can view the auth page', () => {
    cy.visit('/auth');
    cy.contains('Create a user');
  });

  it('can view the profile page', () => {
    cy.visit('/auth/profile');
    cy.contains('Your Profile');
  });

  it('can view the create a listing page', () => {
    cy.visit('/auth/create-listing');
    cy.contains('Create a listing');
  });
});
