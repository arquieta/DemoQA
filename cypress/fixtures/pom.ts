
// Define the function
export function menuOption(selector) {
    cy.get('.category-cards h5').contains(selector).click();
  }

  export function menuList(interactionName) {
    cy.get('.element-group .menu-list .btn').contains(interactionName).click();
  }

  export function selectableOptions(selectOption){
    cy.get('#listContainer').contains(selectOption).click();
  }

  class LoginPage {
    
    
    validateMenu() {
      cy.get('.category-cards .card-body').contains('Elements').and('be.visible')
      cy.get('.category-cards .card-body').contains('Forms').and('be.visible')
      cy.get('.category-cards .card-body').contains('Alerts, Frame & Windows').and('be.visible')
      cy.get('.category-cards .card-body').contains('Widgets').and('be.visible')
      cy.screenshot()
      cy.get('.category-cards .card-body').contains('Interactions').and('be.visible')
    }
  
    fillEmail(email) {
      //cy.get('input[name="userName"]').type(email);
      cy.get('#userName').type(email)
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  }
  export const loginPage = new LoginPage();