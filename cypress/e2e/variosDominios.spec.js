it('navigates', () => {
    //cy.visit('/')
    //cy.get('h1').contains('My Homepage')
    cy.origin('www.acme.com', () => {
    cy.visit('/history/founder')
      cy.get('h1').contains('About our Founder, Marvin Acme') // 👍
    })
  })