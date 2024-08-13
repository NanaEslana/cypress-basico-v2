Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Eslana')
    cy.get('#lastName').type('regina')
    cy.get('#email').type('cypress@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('.button', 'Enviar').click()
})