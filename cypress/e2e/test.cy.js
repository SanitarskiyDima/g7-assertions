describe('Verify order', () => {

  let orderLink;

  it('Place order', () => {
    cy.visit(orderLink);

    cy.get('button').then( button => {
        orderLink = button.attr('href');
    })

  })

  it(' order in ...', () => {

      cy.visit(orderLink);
  })

})