// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Matheus Alexandre')
    cy.get('#lastName').type('do Carmo')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone').type('61983089387')
    cy.get('#open-text-area').type('Texto Exemplo')    
    //para texto único uso o contains
    cy.contains('button', 'Enviar').click()
 })

 Cypress.Commands.add('fillMandatoryFieldsAndSubmitSelect', function(){
    cy.get('#firstName').type('Matheus Alexandre')
    cy.get('#lastName').type('do Carmo')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone').type('61983089387')
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
    cy.get('#open-text-area').type('Texto Exemplo')    
    //para texto único uso o contains
    cy.contains('button', 'Enviar').click()
 })
