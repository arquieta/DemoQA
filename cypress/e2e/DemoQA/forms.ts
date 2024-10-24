describe('Working with forms', () => {
	beforeEach(() => {
		cy.visitDemo()
	})
	it('Redirect to form', () => {

        // Define an array of month names
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
  
      // Get today's date
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, '0');
      const monthIndex = currentDate.getMonth();
      const year = currentDate.getFullYear();
      
      // Format the date as "DD Month YYYY"
      const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
      
      // Output the formatted date to the console (optional)
      cy.log(`Today's Date: ${formattedDate}`);
		cy.get('.category-cards .card-body').as('elementMainMenu')
      cy.get('@elementMainMenu').contains('Elements')
      cy.get('@elementMainMenu').contains('Forms').click() 
      cy.contains('Practice Form').click()  
      //we are now in the form page
      
      //Validations that all label elements are displayed
      cy.get('#userForm').should('be.visible')
      cy.get('#userName-wrapper').should('be.visible')
      cy.get('h5').should('have.text', 'Student Registration Form')
      cy.get('#userName-label').should('be.visible').and('have.class','form-label').and('have.text', 'Name')
      cy.get('#userEmail-label').should('be.visible').and('have.class','form-label').and('have.text', 'Email')
      cy.get('#genterWrapper > .col-md-3').should('be.visible').and('have.text', 'Gender')
      cy.get('#userNumber-label').should('be.visible').and('have.class','form-label').and('have.text', 'Mobile(10 Digits)')
      cy.get('#dateOfBirth-label').should('be.visible').and('have.class','form-label').and('have.text', 'Date of Birth')
      cy.get('#subjects-label').should('be.visible').and('have.class','form-label').and('have.text', 'Subjects')
      cy.get('#hobbiesWrapper > .col-md-3 > #subjects-label').should('be.visible').and('have.class','form-label').and('have.text', 'Hobbies')
      cy.get(':nth-child(8) > .col-md-3 > #subjects-label').should('be.visible').and('have.class','form-label').and('have.text', 'Picture')
      cy.get('#currentAddress-label').should('be.visible').and('have.class','form-label').and('have.text', 'Current Address')
      cy.get('#stateCity-label').should('be.visible').and('have.class','form-label').and('have.text', 'State and City')


      //Validations that all input elements are displayed
      cy.get('#firstName').should('be.visible').and('have.attr','placeholder', 'First Name')
      cy.get('#lastName').should('be.visible').and('have.attr','placeholder', 'Last Name')
      cy.get('#userEmail').should('be.visible').and('have.attr','placeholder', 'name@example.com')
      cy.get('#gender-radio-1').should('exist').and('have.value','Male')
      cy.get('#gender-radio-2').should('exist').and('have.value','Female')
      cy.get('#gender-radio-3').should('exist').and('have.value','Other')
      cy.get('#userNumber').should('be.visible').and('have.attr','placeholder', 'Mobile Number')
      cy.get('#dateOfBirthInput').should('be.visible').and('have.value', formattedDate)
      cy.get('#subjectsContainer').should('be.visible')
      cy.get('#hobbies-checkbox-1').should('exist')
      cy.get('label[for="hobbies-checkbox-1"]').should('have.text', 'Sports')
      cy.get('#hobbies-checkbox-2').should('exist')
      cy.get('label[for="hobbies-checkbox-2"]').should('have.text', 'Reading')
      cy.get('#hobbies-checkbox-3').should('exist')
      cy.get('label[for="hobbies-checkbox-3"]').should('have.text', 'Music')
      cy.get('#uploadPicture').should('be.visible').and('have.class','form-control-file')
      cy.get('#currentAddress').should('be.visible').and('have.attr','placeholder', 'Current Address')
      cy.get('#state').should('be.visible').and('have.text','Select State')
      cy.get('#city').should('be.visible').and('have.text','Select City')
      cy.get('#submit').should('be.visible').and('have.text','Submit')

      //Enter information in the fields
      cy.get('#firstName').should('be.visible').and('have.attr','placeholder', 'First Name').type('Diego')
      cy.get('#lastName').should('be.visible').and('have.attr','placeholder', 'Last Name').type('Arquieta')
      cy.get('#userEmail').should('be.visible').and('have.attr','placeholder', 'name@example.com').type('email@emaildot.com')
      cy.get('#gender-radio-1').should('exist').and('have.value','Male').click({force: true})
      
      cy.get('#userNumber').should('be.visible').and('have.attr','placeholder', 'Mobile Number').type('8115182488')
      cy.get('#dateOfBirthInput').should('be.visible').and('have.value', formattedDate)
      cy.get('#subjectsContainer').should('be.visible').type('This is the testing of the subjects container')
    
      cy.get('#hobbies-checkbox-2').should('exist').click({force: true})
      cy.get('label[for="hobbies-checkbox-2"]').should('have.text', 'Reading')
     
      cy.get('#uploadPicture').selectFile('cypress/fixtures/test.png')

      // cy.fixture('IMG_9532.jpg', { encoding: null }).as('myFixture')
      // cy.get('#uploadPicture').selectFile('@myFixture')
      cy.get('#currentAddress').should('be.visible').and('have.attr','placeholder', 'Current Address').type('México, Nuevo León, América')
      cy.get('#state').should('be.visible').and('have.text','Select State').click()
      cy.get('#react-select-3-option-0').click()
      cy.get('#city').should('be.visible').and('have.text','Select City').click()
      cy.get('#react-select-4-option-0')
      cy.get('#submit').should('be.visible').and('have.text','Submit').click()

      //Validate modal 
      cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
      cy.get('tbody').within(() => {
        cy.contains('td', 'Student Name').siblings('td').should('contain', 'Diego Arquieta');
        cy.contains('td', 'Student Email').siblings('td').should('contain', 'email@emaildot.com');
        cy.contains('td', 'Gender').siblings('td').should('contain', 'Male');
        cy.contains('td', 'Mobile').siblings('td').should('contain', '8115182488');
        cy.contains('td', 'Date of Birth').siblings('td').should('contain', '30 August,2023');
        cy.contains('td', 'Subjects').siblings('td').should('be.empty');
        cy.contains('td', 'Hobbies').siblings('td').should('be.contain', 'Reading');
        cy.contains('td', 'Picture').siblings('td').should('contain', 'test.png');
        cy.contains('td', 'Address').siblings('td').should('contain', 'México, Nuevo León, América');
        cy.contains('td', 'State and City').siblings('td').should('be.empty');
      });

      






      //cy.get('input[placeholder="First Name"]').should('be.visible')



      cy.get('footer').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.')
	})
})