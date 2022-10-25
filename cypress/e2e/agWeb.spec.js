describe('Login to agWeb', () => {
    beforeEach(() => {
    cy.visit('https://ag-dev.integer.pt/')
})

    //cy.origin(`https://login.microsoftonline.com/`, () => {
    //    cy.visit('/');
    //    cy.get('[name="loginfmt"]').type(`matheus.carmo@integer.pt{enter}`);
    //    cy.get('[name="passwd"]').type(`123456{enter}`);
    //    cy.get('[type="submit"]').type('{enter}');
    //});



it('Autentication with login Microsoft', function(){
   //cy.visit('https://ag-dev.integer.pt/')
   cy.origin('https://login.microsoftonline.com/', () => {
    cy.visit('/')
    cy.get('[name="loginfmt"]').type(`matheus.carmo@integer.pt{enter}`);
    cy.get('[name="passwd"]').type(`951784M@c*{enter}`);
    cy.get('[type="submit"]').type('{enter}');
   })

});

})






