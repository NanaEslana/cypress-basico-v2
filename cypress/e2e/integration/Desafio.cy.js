///<reference types="Cypress" />

//Encontre o gato na aplicação

describe('desafio final do curso',()=>{
    beforeEach(()=> cy.visit('./src/index.html')) 

    it('encontre o gato perdido',()=>{
        cy.get('#cat')
            .invoke('show')
            .should('be.visible')
        cy.get('#title')
            .invoke('text', 'CAT TAT')
        cy.get('#subtitle')
            .invoke('text','Eu estou finaizando o curso!')
    })
})