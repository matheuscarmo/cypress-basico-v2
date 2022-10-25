describe('Login to agWeb', () => {
    beforeEach(() => {
    cy.visit('https://ag-dev.integer.pt/')
})





it('Autentication with login Microsoft', function(){
   //cy.visit('https://ag-dev.integer.pt/')
   cy.origin('https://login.microsoftonline.com/', () => {
    cy.visit('/')
    cy.get('[name="loginfmt"]').type(`email{enter}`);
    cy.get('[name="passwd"]').type(`senha{enter}`);
    cy.get('[type="submit"]').type('{enter}');
   })

});

})






