describe('Login to agWeb', () => {
    beforeEach(() => {
    cy.origin(`https://login.microsoftonline.com`, () => {
    cy.visit('https://ag-dev.integer.pt/')
    cy.wait(5000) 
    cy.get('[name="loginfmt"]').type(`matheus.carmo@integer.pt{enter}`);
    cy.wait(5000);
    cy.get('[name="passwd"]').type(`951784M@c*{enter}`);
    cy.get('[type="submit"]').type('{enter}');
    })
})

it.only('Autentication with login Microsoft', function(){
    cy.origin('https://ag-dev.integer.pt/', () => {
    cy.contains('Matheus Carmo').should('be.visible')
})
});

})






