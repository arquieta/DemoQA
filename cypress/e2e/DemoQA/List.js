describe('Validate diferent methods to use lists', () => {
	beforeEach(() => {
		cy.visitDemo()
	})
	it('Use direct approach for the list', () => {
		//Use the cyget to reach specific objects in page. The dot means they're classes, the # means an ID and the html elements doesnt have an identifier
        //The contains command can help us to reach more specific elements
		cy.get('.category-cards .card-body').contains('Interactions').click()
        
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
        it('Use within for the list', () => {
		
            cy.get('.category-cards .card-body').contains('Interactions').click()
    
            cy.get('.left-pannel .accordion .element-group .element-list.collapse.show .menu-list').within(() => {
                 
                //cy.get('span.text').eq(1).should('contain', 'Selectable').should('be.visible')
                cy.get('#item-1').should('be.visible')
                .click()
            })
    
               // cy.get('.header-text').contains('Interactions').click()
            cy.wait(10000)
            
            })

            it.only('Validate each value inside the list', () => {
		
                cy.get('.category-cards .card-body').contains('Interactions').click()
        
                cy.get('.left-pannel .accordion .element-group .element-list.collapse.show .menu-list').within(() => {
                    // .should('be.visible')
                    cy.contains('Selectable')
                    .click()
                })
                cy.url().should('include', '/selectable')
                cy.get('ul#verticalListContainer li').should('be.visible')

                cy.get('#verticalListContainer li').each(($li, index) => {
                    const expectedTexts = [
                        'Cras justo odio',
                        'Dapibus ac facilisis in',
                        'Morbi leo risus',
                        'Porta ac consectetur ac'
                      ];
                    cy.wrap($li)
                    .should('be.visible')
                    .should('have.text', expectedTexts[index])
                });
                cy.get('#verticalListContainer li').each(($li, index) => {
                    const expectedTexts = [
                        'Cras justo odio',
                        'Dapibus ac facilisis in',
                        'Morbi leo risus',
                        'Porta ac consectetur ac'
                      ];
                    $li.click ();
                    cy.wrap($li)
                    .should('be.visible')
                    .should('have.text', expectedTexts[index]).and('have.class', 'active');
                });
               
                // cy.get('ul#verticalListContainer').within(() => {
                //     cy.get('.mt-2.list-group-item.list-group-item-action').should('be.visible')
                //     cy.get('li:first-child .mt-2.list-group-item.list-group-item-action').should('be.visible')
                // })
                   // cy.get('.header-text').contains('Interactions').click()
                cy.wait(10000)
                
                })

	})
	
