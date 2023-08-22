/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
declare namespace Cypress {
	interface Chainable {
		
		zeroLogin(): Chainable<Element>
		visitDemo(): Chainable<Element>
	}
}



// Cypress.Commands.add('visitLiverpool', () => {
// 	cy.viewport(1920, 1080)
// 	cy.clearCookies()
// 	cy.clearLocalStorage()
// 		cy.visit('/', {
// 			headers: {
// 				'accept': 'application/json, text/plain, */*',
// 				'user-agent': 'axios/0.27.2'
// 			}
// })
// })
Cypress.Commands.add('visitDemo', () => {
	cy.viewport(1920, 1080)
	cy.clearCookies()
	cy.clearLocalStorage()
		cy.visit('https://demoqa.com/', {
			})
})

// Cypress.Commands.add('pageLogin', (username, password) => {
// 	cy.fixture('example').then(example => {
// 		const username = example.username
// 		const password = example.password

// 		cy.get('#username').type(username)
// 		cy.get('#password').type(password)
// 	})
// })
// 	Cypress.Commands.add('salesforceLogin', (username, password) => {
// 		cy.fixture('salesforce').then(salesforce => {
// 			const username = salesforce.username
// 			const password = salesforce.password
	
// 			cy.get('#username').type(username)
// 			cy.get('#password').type(password)
// 			cy.contains('Log In').should('be.visible').click()
// 			cy.contains('Remind Me Later').should('be.visible').click()
// 		})
// })
// Cypress.Commands.add('buttonLogin', () => {
// 	cy.get('button[type="submit"]').contains('Iniciar sesión').should('be.visible').click({force: true})
	
// 	//.c994ae14c.c2fd8f218.ca2dc35c7.c0c7f649b.cfbf81233
// })
// Cypress.Commands.add('sendWhatsappCode', () => {
// 	cy.get('.cfe4535fe._link-resend-code.c2dd6083e').should('be.visible').click()
// 	cy.wait(10000)
// })


Cypress.Commands.add('zeroLogin', () => {
	cy.contains('Signin').should('be.visible').click()
		cy.get('#user_login').type('username')
		cy.get('#user_password').type('password')
		cy.get('input[type="submit"]').click()
	})