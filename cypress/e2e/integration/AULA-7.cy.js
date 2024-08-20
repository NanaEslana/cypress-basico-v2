///<reference types="Cypress" />

describe('Selecionando opções em campos de seleção suspensa',()=>{
    beforeEach(()=> cy.visit('./src/index.html')) 

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',()=>{
        cy.get('a').should('have.attr','target','_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link',()=>{
        cy.get('a').invoke('removeAttr','target').click()

        cy.contains('Talking About Testing').should('be.visible')
    })


})