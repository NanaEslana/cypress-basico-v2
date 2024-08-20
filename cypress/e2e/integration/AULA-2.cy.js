///<reference types="Cypress" />

describe ('Central de atendimento ao cliente TAT', function(){

    beforeEach(()=> cy.visit('./src/index.html'))

    it('verifica o titulo da aplicação',function(){
        cy.get('#title').should('contain','CAC')
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    //Exercício extra + extra 1
    it('preenche os campos obrigatorios e envia formulario', function(){
        const longText = 'gostaria de um atendimento,teste,teste,gostaria de um atendimento,teste,gostaria de um atendimento,teste,teste,gostaria de um atendimento,teste'
        cy.get('#firstName').type('Eslana')
        cy.get('#lastName').type('regina')
        cy.get('#email').type('cypress@gmail.com')
        cy.get('#open-text-area').type(longText,{delay: 0})
        cy.contains('.button', 'Enviar').click()
        cy.get('.success > strong').should('be.visible')
    })

    //Exercício extra 2
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', ()=>{
        cy.get('#firstName').type('Eslana')
        cy.get('#lastName').type('regina')
        cy.get('#email').type('cypress.gmail.com')
        cy.get('#open-text-area').type('teste')
        cy.contains('.button', 'Enviar').click()
        cy.get('.error > strong').should('be.visible')
    })

    //Exercício extra 3
    it('teste para validar que, se um valor não-numérico for digitado, seu valor continuará vazio.',()=>{
        cy.get('#phone')
            .type('abcdefg')
            .should('have.value', '')
    })

    //Exercício extra 4
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',()=>{
        cy.get('#firstName').type('Eslana')
        cy.get('#lastName').type('regina')
        cy.get('#email').type('cypress@gmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('teste')
        cy.contains('.button', 'Enviar').click()
        cy.get('.error > strong').should('be.visible')

    })

    //Exercício extra 5
    it('preenche e limpa os campos nome, sobrenome, email e telefone',()=>{
        cy.get('#firstName').type('Eslana')
            .should('have.value', 'Eslana')
            .clear()
            .should('have.value', '')
        cy.get('#lastName').type('regina')
            .should('have.value', 'regina')
            .clear()
            .should('have.value', '')
        cy.get('#email').type('cypress@gmail.com')
            .should('have.value', 'cypress@gmail.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone').type('988565958')
            .should('have.value', '988565958')
            .clear()
            .should('have.value', '')
    })

    //Exercício extra 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',()=>{
        cy.contains('.button', 'Enviar').click()
        cy.get('.error > strong').should('be.visible')
    })

    //Exercício extra 7
    it('envia o formuário com sucesso usando um comando customizado',()=>{
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success > strong').should('be.visible')
    })

})
