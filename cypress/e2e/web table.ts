describe('Web Tables', () => {
  it('Validate table values', () => {
    cy.visitDemo()
    cy.get('.category-cards .card-body').contains('Elements').click()
    cy.get(".accordion .element-group .element-list.collapse.show").contains('Web Tables').click()
    cy.get('#addNewRecordButton').should('be.visible').and('have.text', 'Add')
    cy.get('input[placeholder="Type to search"]').should('be.visible')
    cy.get(':nth-child(1) > .rt-resizable-header-content').should('be.visible').and('have.text', 'First Name')
    cy.get('.rt-thead.-header .rt-tr').contains('Last Name').should('be.visible').and('have.text', 'Last Name')

  })
})