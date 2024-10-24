describe('Test cases for Encora', () => {
	
  before(() => {
		cy.viewport(1920, 1080)
	cy.clearCookies()
	cy.clearLocalStorage()
	cy.visit('https://diegoarquieta.com/cypress/index.html')
	})

	it('First question', () => {

    cy.get('a.nav-link').contains('Flights').click()

    // Validate we switch to correct page
    cy.url().should('include', '/flights.html')
		
    cy.get('h1').contains('Flights').should('be.visible')

    cy.get('label[for="flight-from"]').should('be.visible').and('contain', 'Flight from')
    cy.get('label[for="flight-to"]').should('be.visible').and('contain', 'Flight to')
    cy.get('label[for="departing"]').should('be.visible').and('contain', 'Departing')
    cy.get('label[for="returning"]').should('be.visible').and('contain', 'Returning')
    //cy.get('label[for="Travelers"]').should('be.visible').and('contain', 'Travelers')

    //Select the info for the flight
   
    cy.get('#flight-from').select('CDMX')

    // Select 'Havana' for 'Flight to'
    cy.get('#flight-to').select('La Habana')

    // Enter 'Departing' date as tomorrow
    const today = new Date();
    const tomorrow = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0]
    cy.get('#departing').type(tomorrow);

    // Enter 'Returning' as 5 days after 'Departing'
    const returningDate = new Date(today.setDate(today.getDate() + 5)).toISOString().split('T')[0]
    cy.get('#returning').type(returningDate);

    // Search flights
    cy.get('button.button-ns').contains('Search').click()
				

    cy.url().should('include', '/results')

    cy.contains('Results').should('be.visible')

    // Validate that we have results
    cy.get('.flight-card').should('have.length.at.least', 1)

    cy.get('#sort').select('asc')

    cy.get('.price').then(priceTags => {
      const prices = priceTags.map((index, html) => Cypress.$(html).text().trim().replace('USD $', '')).get();
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });





		})
    
  })