/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste, teste, teste, teste, teste, teste'

        cy.get('#firstName').type('Matheus Alexandre')
        cy.get('#lastName').type('do Carmo')
        cy.get('#email').type('teste@teste.com')
        cy.get('#phone').type('61983089387')
        cy.get('#open-text-area').type(longText, {delay: 0})
        //pra identificar que é um atributo da tag
        cy.get('button[type="submit"]').click()
        //pra identificar que é uma classe
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Matheus Alexandre')
        cy.get('#lastName').type('do Carmo')
        cy.get('#email').type('teste@teste')
        cy.get('#phone').type('61983089387')
        cy.get('#open-text-area').type('Texto exemplo')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
        cy.get('#phone')
            .type('abcdefghij')
            .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Matheus Alexandre')
        cy.get('#lastName').type('do Carmo')
        cy.get('#email').type('teste@teste.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Texto exemplo')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')
            .type('Matheus Alexandre')
            .should('have.value','Matheus Alexandre')
            .clear().should('have.value', '')
        cy.get('#lastName')
            .type('do Carmo')
            .should('have.value','do Carmo')
            .clear().should('have.value', '')
        cy.get('#email')
            .type('teste@teste.com')
            .should('have.value','teste@teste.com')
            .clear().should('have.value', '')
        cy.get('#phone')
            .type('61983089387')
            .should('have.value','61983089387')
            .clear().should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto', function() {
        //cy.fillMandatoryFieldsAndSubmitSelect()
        //cy.get('.success').should('be.visible')

        cy.get('#product')
            .select('YouTube')
                .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product')
            .select('mentoria')
                .should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product')
            .select([1])
                .should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type=radio][value=feedback]').check()
        //cy.get('input[type=radio]')
        //    .check('feedback')
                .should('have.value', 'feedback')
    })

    it('marca o tipo de atendimento', function() {
        cy.get('input[type=radio]').check()
            .should('have.length', 3)
            .each(function($radio){
                cy.wrap($radio).check().should('be.checked')
            })
    })

    it('marca ambos checkboxes, depois desmarca o último', function(){
        cy.get('input[type=checkbox]').check()
            .should('be.checked')
                .last().uncheck()
                    .should('not.be.checked')
    })          

    it('seleciona um arquivo da pasta fixtures', function(){
        //cy.get('input[type="file"]#file-upload')
        //cy.get('input[type="file"]')
        cy.get('#file-upload')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(function($qualquer){
                console.log($qualquer)
                expect($qualquer[0].files[0].name).to.equal('example.json')
            })
    })

    it('seleciona um arquivo simulando um drag-and-drop', function(){
        cy.get('input[type="file"]')
            .should('not.have.value')
            //arrasta e soltar drag and drop
            .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
            .should(function($input){
                console.log($input)
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
        cy.fixture("example.json").as('sampleFile')
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('@sampleFile')
            .should(function($input){
                console.log($input)
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
        cy.get('#privacy a')
            .should('have.attr', 'target', '_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicanco no link', function(){
        cy.get('#privacy a')
            .invoke('removeAttr', 'target', '_blank')
            .click()
        cy.contains('Talking About Testing').should('be.visible')
    })


  })

  