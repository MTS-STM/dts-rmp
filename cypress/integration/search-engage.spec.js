/* eslint-disable no-undef */
// index page.
describe('open to the Index page', function() {
  beforeEach(function() {
    cy.visit('/')
  })
  it.skip('should allow a user to search for an engagement', () => {
    cy.get('[data-cy=search-nav]').click()
  })
})
