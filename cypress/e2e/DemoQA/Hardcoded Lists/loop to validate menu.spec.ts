describe('Validate diferent methods to use lists', () => {
	beforeEach(() => {
		cy.visitDemo()
	})
	it('Use direct approach for the list', () => {
		//Use the cyget to reach specific objects in page. The dot means they're classes, the # means an ID and the html elements doesnt have an identifier
        //The contains command can help us to reach more specific elements
		cy.get('.category-cards .card-body').each(($element, index) => {
            const menuItems = [
                'Elements',
                'Forms',
                'Alerts, Frame & Windows',
                'Widgets',
                'Interactions',
                'Book Store Application'
            ];
            cy.wrap($element).should('have.text', menuItems[index])
        })
        
        //we are adding validations to some steps to assure we are displaying the required information
        cy.get('.left-pannel .accordion .element-group').contains('Interactions').should('have.text', 'Interactions')
        
        //The within can help us reduce scope for some commands, this next part does the same as the previous one
        cy.get('.left-pannel .accordion .element-group').eq(4).within(() => {
            cy.get('.group-header').should('have.text', 'Interactions\u00a0')
        })
        //
        cy.get('.left-pannel .accordion .element-group .element-list.collapse.show .menu-list')
			//If we add the find li when we have a list, we are reducing the scope to what we are looking for
			.find('li')
            .contains('Selectable')
            .should('be.visible')
			.click()

           // cy.get('.header-text').contains('Interactions').click()
		cy.wait(10000)
		
		})
    })