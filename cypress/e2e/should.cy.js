describe('Chai assertions', () => {
  it('should', () => {
    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/assertions');

    cy.get('tbody tr').eq(2).should('have.attr', 'class');
    cy.get('tbody tr').eq(2).should('have.class', 'success');
    cy.get('tbody tr th').eq(2).should('have.attr', 'scope', 'row');

    cy.get('tbody tr td').eq(0).should('contain', 'Column content');
    cy.get('tbody tr td').eq(0).should('contain', ' content'); // verify part of element text
    //cy.get('tbody tr td').eq(0).should('have.text', ' content'); // should fail
    cy.get('tbody tr td').eq(0).should('have.text', 'Column content');
    cy.get('tbody tr td').eq(0).should('have.html', 'Column content');
    cy.get('tbody tr td').eq(0).should('include.text', ' content'); // verify part of element text

    cy.get('tbody tr td').eq(0).should('not.contain', 'qweqwe');
    cy.get('tbody tr td').eq(0).should('not.have.text', 'qweqwe');
    cy.get('tbody tr td').eq(0).should('not.have.html', 'qweqwe');

    // let arr = [];
    // cy.get('tbody tr th').each( element => {
    //
    //   arr.push(element.text())
    //
    // })
    //
    // cy.log(arr);

    cy.get('tbody tr th').eq(1).invoke('text').then(parseFloat).should('be.greaterThan', 1);
    cy.get('tbody tr th').eq(1).invoke('text').then(parseFloat).should('not.be.greaterThan', 3);

    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying');
    cy.get('#inputEmail').type('Hello').should('have.value', 'Hello');
    cy.get('#inputEmail').should('have.prop', 'value', 'Hello');
    cy.get('#inputEmail').should('have.prop', 'tagName', 'INPUT');

    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/traversal');
    cy.get('.traversal-disabled button').first().should('be.disabled');

    cy
        .get('.traversal-disabled button')
        .last()
        .should('exist')
        .and('be.visible')
        .and('be.enabled');

    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/assertions');
    cy
        .get('tbody tr td')
        .eq(4)
        .should('be.visible')
        .and('have.css', 'background-color')
        .and('eq', 'rgb(223, 240, 216)');

    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu li').should('have.length', 17);

    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/actions');
    cy.get('[value="checkbox1"]').first().should('have.prop', 'checked', false);
    cy.get('[value="checkbox1"]').first().check();
    cy.get('[value="checkbox1"]').first().should('have.prop', 'checked', true);

  })
})