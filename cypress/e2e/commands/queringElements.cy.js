let someVal;

describe('Chai assertions', () => {
    it('Expect', () => {
        cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying');

        cy.log('.get() command')
        cy.get('#query-btn').should('be.visible');
        cy.get('#query-btn', {timeout: 20000}).should('be.visible');         // instead cy.wait(...) use ", {timeout: 20000}"

        cy.log('.contains() command')
        cy.get('.query-list li:contains("apples")').should('be.visible'); // should find all elements with text "apples"
        cy.contains('apples').should('be.visible'); // should find first elements with text "apples"
        cy.get('.query-list li:contains("apples")').contains('more').should('be.visible'); // .contains() can be combined with other cy commands

        cy.contains('Apples', {matchCase: false}).should('be.visible'); // .contains() case sensitive by default

        cy.log('.within() command')
        cy.get('input').should('have.length', 3);
        cy.get('.query-form').within( () => {
            cy.get('input').should('have.length', 2);
        })

        cy.log('.root() command')
        cy.root().should('be.visible');
        cy.get('.query-form').within( () => {
            cy.root().should('be.visible');
        })
    })
})