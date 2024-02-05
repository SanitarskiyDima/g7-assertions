it('Time test', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    cy.clock();

    cy.get('[src="assets/images/dark-theme.jpg"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
    cy.get('ngx-toastr', {timeout: 15000}).should('be.visible');
    cy.get('div.col-md-6.col-sm-12  button.select-button').eq(0).click();
    cy.get(`nb-option[ng-reflect-value="top-right"]`).click();
    cy.get(`input[name="title"]`).clear();
    cy.get(`input[name="title"]`).type('qewqweqew');
    cy.get(`input[name="content"]`).clear();
    cy.get(`input[name="content"]`).type('qweqweqwe');
    cy.get(`input[name="timeout"]`).clear();
    cy.get(`input[name="timeout"]`).type(60000);
    cy.contains('button', 'Show toast').click();

    cy.tick(60000);
    cy.get('nb-toast').should('not.be.visible');
})


