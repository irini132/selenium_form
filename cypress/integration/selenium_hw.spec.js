describe('MI HW', () => {
  beforeEach(function () {
      cy.visit('https://the-internet.herokuapp.com/login');
  });
  it ('Signin with valid creds', () =>{
    // cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('tomsmith')
    cy.get('[name="password"]').type('SuperSecretPassword!')

    cy.get('button').click()
    cy.get('.flash.success').contains('You logged into a secure area!')
  })
  it ('Signin with invalid creds', () =>{
    // cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('tomsmith1')
    cy.get('[name="password"]').type('SuperSecretPassword!1')

    cy.get('button').click()
    cy.get('.flash.error').contains('Your username is invalid!')
  })
    it ('Logout', () =>{
      cy.get('[name="username"]').type('tomsmith')
      cy.get('[name="password"]').type('SuperSecretPassword!')
      cy.get('button').click()
      cy.get('.button.secondary.radius').click()
  })
})
