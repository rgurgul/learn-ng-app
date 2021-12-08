describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('items')
  })

  it('should add, find & remove item', ()=>{
    cy.visit('items')
    cy.contains('log in').click();
    cy.contains('log out').should('be.visible');

    cy.contains('add item').click();

    cy.get('#add-item-form').should('be.visible');

    const uTitle = 'robert' + Date.now();

    cy.get('#add-item-form input[name=title]').type(uTitle)
    cy.get('#add-item-form input[name=price]').type('1234')
    cy.get('#add-item-form select').select('food')

    cy.get('#add-item-form').contains('send item').click();

    cy.get('app-search :nth-child(1) > input').type(uTitle)

    cy.get('app-grid tbody').contains(uTitle)

    cy.get('app-grid tbody tr').should('have.length', 1);
    cy.wait(1000)
    cy.get('app-grid tbody tr').contains('remove').click();
    cy.wait(1000)
    cy.get('app-grid tbody tr').should('have.length', 0);





  })
})
