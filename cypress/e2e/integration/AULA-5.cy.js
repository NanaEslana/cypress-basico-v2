///<reference types="Cypress" />

describe('Marcando inputs do tipo radio',()=>{
    beforeEach(()=> cy.visit('./src/index.html')) 

    it('marca ambos checkboxes, depois desmarca o último',()=>{
        cy.get('input[type="checkbox"]')
            .check()
            .last()
            .uncheck()
            .should('not.be.checked')
    })
})