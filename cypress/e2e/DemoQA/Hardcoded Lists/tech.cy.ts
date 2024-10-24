describe('Validatetech interview', () => {
	
	it('Validate elements displayed to interact', () => {
        cy.visit('https://stxnext.com/')

        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
        
        cy.get('.text-block-20').contains('Portfolio').click()
        cy.get('div.multi-select-field[tabindex="0"]', { multiple: true } ).click()
        cy.get('div[data-value="Poland"][multi-select-item="true"]').click()
        cy.get('div[data-value="Netherlands"][multi-select-item="true"]').click()
        cy.get('div.multi-select-tag[data-value="Poland"]')
          .should('be.visible');
          cy.get('div.multi-select-tag[data-value="Netherlands"]')
          .should('be.visible');
          cy.get('div[fs-cms-element="item"].collection-item')
          .should('have.length', 4);
          cy.get('div.projects-pagination-count-container a[fs-cmsload-element="page-button"]')
          .should('have.length', 3);
         // cy.get('div.multi-select-field[tabindex="1"]')
        
          cy.get('div[data-value="Hospitality"][multi-select-field="true"]').click()
          cy.get('div.multi-select-field[data-value="Hospitality"]')
          .should('be.visible');
        
        cy.get('multi-select[label="Industry"].multi-select-industry')
          .within(() => {
            // Check that "Hospitality" is displayed in the multi-select tags container
            cy.get('.multi-select-tags-container .multi-select-tag[data-value="Hospitality"]')
              .should('be.visible')
            })
        
          cy.get('div.projects-pagination-count-container a[fs-cmsload-element="page-button"]')
          .should('have.length', 1);
          cy.get('a[aria-label="Next Page"]')
          .should('have.attr', 'href', '?9a755fed_page=2')
          .click();
          cy.url().should('eq', 'https://stxnext.com/portfolio?country=Poland%2CNetherlands&industry=Hospitality');
          cy.get('div.multi-select-tag[data-value="Netherlands"]')
          .click()
          .and('not.exist')
          cy.get('div.multi-select-tag[data-value="Poland"]')
          .should('be.visible');
          cy.get('div[fs-cmsload-showquery="true"][fs-cms-element="list"][fs-cmsfilter-element="list"][fs-cmsfilter-showquery="true"][fs-cmsload-element="list"][fs-cmsload-mode="pagination"][role="list"]')
          .should('have.css', 'display', 'none');
		
		})
    })
