describe('MI HW', () => {
  beforeEach(function () {
      cy.visit('https://the-internet.herokuapp.com/login');
  });

it ('Signin with valid creds', () =>{
  cy.get('[name="username"]').type('tomsmith')
  cy.get('[name="password"]').type('SuperSecretPassword!')

  cy.get('button').click()
  cy.get('.flash.success').contains('You logged into a secure area!')
})
})