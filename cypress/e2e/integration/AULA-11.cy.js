///<reference types="Cypress" />

describe('navegador com os comandos cy.clock() e cy.tick()',()=>{
    //cy.clock(), você pode "congelar" 🧊 o relógio do navegador.
    //cy.tick(), você pode avançar no tempo. 🕒

    //.invoke('show'), você pode forçar a exibição de um elemento HTML que esteja escondido, com um estilo display: none;, por exemplo.
    //.invoke('hide'), você pode esconder um elemento que está sendo exibido.

    beforeEach(()=> cy.visit('./src/index.html')) 

    const THREE_SECONDS_IN_MS = 3000

    it('envia o formuário com sucesso usando um comando customizado',()=>{
        cy.clock()
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success > strong').should('be.visible')

        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.success > strong').should('not.be.visible')

    })

    it('preenche os campos obrigatorios e envia formulario', function(){
        const longText = Cypress._.repeat('fazer meu teste',10)//vai repitar a frase 10 vezes 
        cy.clock()
        cy.get('#firstName').type('Eslana')
        cy.get('#lastName').type('regina')
        cy.get('#email').type('cypress@gmail.com')
        cy.get('#open-text-area').type(longText,{delay: 0})
        cy.contains('.button', 'Enviar').click()
        cy.get('.success > strong').should('be.visible')

        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.success > strong').should('not.be.visible')
    })

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
        cy.get('.success')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')
          .invoke('hide')
          .should('not.be.visible')
        cy.get('.error')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Valide os campos obrigatórios!')
          .invoke('hide')
          .should('not.be.visible')
    })
    it('preenche a area de texto usando o comando invoke',()=>{
        const longText = Cypress._.repeat('0123456789', 20)

        cy.get('#open-text-area')
            .invoke('val',longText)
            .should('have.value', longText)
    })
})