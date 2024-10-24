import { loginPage } from '../../../fixtures/pom.ts';
describe('Validate landing page works as expected', () => {
	
	it('Validate elements displayed to interact', () => {
  cy.viewport(1920, 1080)
	cy.clearCookies()
	cy.clearLocalStorage()
	cy.visit('https://demoqa.com/')
		
		cy.get('.category-cards .card-body').contains('Elements')
    cy.get('.category-cards .card-body').contains('Forms')
    cy.get('.category-cards .card-body').contains('Alerts, Frame & Windows')
    cy.get('.category-cards .card-body').contains('Widgets')
    cy.get('.category-cards .card-body').contains('Interactions')
    cy.get('.category-cards .card-body').contains('Book Store Application')
    cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')
		
		})
    
    it('Validate elements displayed to interact, using aliases', () => {
      cy.viewport(1920, 1080)
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.visit('https://demoqa.com/')
        
        cy.get('.category-cards .card-body').as('elementMainMenu')
          cy.get('@elementMainMenu').contains('Elements')
          cy.get('@elementMainMenu').contains('Forms')
          cy.get('@elementMainMenu').contains('Alerts, Frame & Windows')
          cy.get('@elementMainMenu').contains('Widgets')
          cy.get('@elementMainMenu').contains('Interactions')
          cy.get('@elementMainMenu').contains('Book Store Application')
          cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')
          
        })
    it('Validate elements displayed to interact, using array', () => {
          cy.viewport(1920, 1080)
          cy.clearCookies()
          cy.clearLocalStorage()
          cy.visit('https://demoqa.com/')
            
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
          cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')
              
            })

  it('Validate that all options in "Elements" menu are displayed, hardcoded', () => {
    cy.viewport(1920, 1080)
	  cy.clearCookies()
	  cy.clearLocalStorage()
	  cy.visit('/')
		
    cy.get('.category-cards .card-body').contains('Elements').click()
    cy.get(".accordion .element-group .element-list.collapse.show").contains('Text Box').should('contain.text', "Text Box").and('be.visible')
    cy.get(".accordion .element-group .element-list.collapse.show").contains('Check Box').should('contain.text', "Check Box").and('be.visible')
    cy.get(".accordion .element-group .element-list.collapse.show").contains('Radio Button').should('contain.text', "Radio Button").and('be.visible')
    cy.get(".accordion .element-group .element-list.collapse.show").contains('Web Tables').should('contain.text', "Web Tables").and('be.visible')
    cy.get(".accordion .element-group .element-list.collapse.show").contains('Links').should('contain.text', "Links").and('be.visible')
    cy.get(".accordion .element-group .element-list.collapse.show").contains('Broken Links - Images').should('contain.text', "Broken Links - Images").and('be.visible')
    cy.get(".accordion .element-group .element-list.collapse.show").contains('Upload and Download').should('contain.text', "Upload and Download").and('be.visible')
    cy.get(".accordion .element-group .element-list.collapse.show").contains('Dynamic Properties').should('contain.text', "Dynamic Properties").and('be.visible')
    cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')

})
it('Validate that all elements in menu are displayed, with array', () => {
	cy.viewport(1920, 1080)
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.visit('/')

  cy.get('.category-cards .card-body').contains('Elements').click()
  cy.get(".accordion .element-group .element-list.collapse.show li").each(($li, index) => {
    // Get the expected text based on the index or any other criteria
    const expectedTexts = [
    "Text Box",
    "Check Box",
    "Radio Button",
    "Web Tables",
    "Buttons",
    "Links",
    "Broken Links - Images",
    "Upload and Download",
    "Dynamic Properties",
  ]; 
// Use .eq(index) to target the specific element-group
  cy.wrap($li)
    .should("have.text", expectedTexts[index])
    .and("be.visible");
  cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')
  })
})
// cy.go('back')
// cy.get('.category-cards .card-body').contains('Forms').click()
// cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
//     // Get the expected text based on the index or any other criteria
//     const expectedTexts = [
//       "Practice Form",                     
//     ];

//     // Use .eq(index) to target the specific element-group
//     cy.wrap($elementGroup)
//       .should("contain.text", expectedTexts[index])
//       .and("be.visible");
//     })
//     cy.go('back')

//     cy.get('.category-cards .card-body').contains('Alerts, Frame & Windows').click()
//     cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
//         // Get the expected text based on the index or any other criteria
//         const expectedTexts = [
//           "Browser Windows",
//           "Alerts",
//           "Frames",
//           "Nested Frames",
//           "Modal Dialogs",       
//         ];
  
//         // Use .eq(index) to target the specific element-group
//         cy.wrap($elementGroup)
//           .should("contain.text", expectedTexts[index])
//           .and("be.visible");
//         })
//         cy.go('back')

// cy.get('.category-cards .card-body').contains('Widgets').click()
// cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
//     // Get the expected text based on the index or any other criteria
//     const expectedTexts = [
//       "Accordian",
//       "Auto Complete",
//       "Date Picker",
//       "Silder",
//       "Progress Bar",
//       "Tabs",
//       "Tool Tips",
//       "Menu",
//       "Select Menu",

//     ];

//     // Use .eq(index) to target the specific element-group
//     cy.wrap($elementGroup)
//       .should("contain.text", expectedTexts[index])
//       .and("be.visible");
//     })
//     cy.go('back')

//     cy.get('.category-cards .card-body').contains('Interactions').click()
// cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
//     // Get the expected text based on the index or any other criteria
//     const expectedTexts = [
//       "Sortable",
//       "Selectable",
//       "Resizable",
//       "Droppable",
//       "Dragabble",
                  
//     ];

//     // Use .eq(index) to target the specific element-group
//     cy.wrap($elementGroup)
//       .should("contain.text", expectedTexts[index])
//       .and("be.visible");
//     })
//     cy.go('back')
//     cy.get('.category-cards .card-body').contains('Book Store Application').click()
//     cy.get(".accordion .element-group .element-list.collapse.show").each(($elementGroup, index) => {
//         // Get the expected text based on the index or any other criteria
//         const expectedTexts = [
//           "Login",
//           "Book Store",
//           "Profile",
//           "Book Store API",               
//         ];
  
//         // Use .eq(index) to target the specific element-group
//         cy.wrap($elementGroup)
//           .should("contain.text", expectedTexts[index])
//           .and("be.visible");
//         })
//         cy.go('back')


    

    
    
//     })

    it('Validate that all elements in menu are displayed', () => {

      loginPage.validateMenu()
      cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')
      
      })

      it('Login', () => {
        cy.viewport(1920, 1080)
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('/')
		
        loginPage.validateMenu()
            cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')
            cy.get('.category-cards .card-body').contains('Book Store Application').click()
            cy.contains('Login').click()
            cy.fixture('example').then(({ email }) => {
              loginPage.fillEmail(email)

            })
            


    
        
        
        })
      



    })