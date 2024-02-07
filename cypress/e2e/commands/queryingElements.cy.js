let someVal;

describe('Cypress commands for querying elements', () => {
    it.skip('querying', () => {
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

    it('Traversal', () => {
        cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/traversal');

        cy.get('.traversal-breadcrumb').children('li').should('have.length', 3);
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');
        cy.get('.traversal-list li').eq(0).should('have.text', 'tabby');
        cy.get('.traversal-list li').eq(-1).should('have.text', 'burmese');
        cy.get('.traversal-nav').children('li').filter(':not(.active)').should('have.length', 2);
        cy.get('.traversal-pagination').find('span').eq(-1).should('have.text', '»');
        cy.get('.traversal-next-all').find('.second').next().should('have.text', 'bananas');
        cy.get('.traversal-next-all').find('.second').nextAll().should('have.length', 3);
        cy.get('.healthy-foods #fruits').nextUntil('#veggies').should('have.length', 3);
        cy.get('.traversal-mark').parent().should('have.text', 'Morbi leo risus, porta ac consectetur ac, highlight vestibulum at eros.');
        cy.get('.traversal-cite').parents('blockquote').then( element => {
            let expectedText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Someone famous in Source Title';
            expect(element.text().replace(/\s/g, '')).eq(expectedText.replace(/\s/g, ''));
        })

        cy.get('.traversal-pills .active').siblings().should('have.length', 2);

    })
})