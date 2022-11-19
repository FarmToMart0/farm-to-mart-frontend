const registerUrlMatcher = new RegExp("http://localhost:3000/signup");
const loginUrlMatcher = new RegExp("http://localhost:3000/login");
const basicUrlMatcher = new RegExp("http://localhost:3000/");

describe('Login', function(){
    it('Change to Login Page', function(){
        cy.visit('http://localhost:3000/')
        cy.contains('LOGIN').click()
        cy.url().should('match', basicUrlMatcher);
        cy.visit('http://localhost:3000/login')
        cy.get('.email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
    })

    // it('Register page', function(){
    //     cy.get('button[title="loginbtn"]').should('be.visible').click()
    //     cy.url().should('match', loginUrlMatcher);
    //     cy.get('button[title="registerbuttin"]').should('be.visible').click()
    //     cy.url().should('match', registerUrlMatcher);
    //     cy.get('input[type="email"]').type('masdbgdbfgb@gmail.com')
    //     cy.get('input[type="name"]').type('Isuru Ariyarathne')
    //     cy.get('input[type="gender"]').type('Male')
    //     cy.get('input[type="postalcode"]').type('81400')
    //     cy.get('input[type="address"]').type('mashkarharis3@gmail.com')
    //     cy.get('.MuiButton-label').contains('Sign Up').should('be.visible').click()
    //     cy.url().should('match', loginUrlMatcher);
    // })

    // it('Sign in', function(){
    //     cy.visit('http://localhost:3000/signin')
    //     cy.get('input[type="text"]').type('thilakarathnadilshan1024@gmail.com')
    //     cy.get('input[type="password"]').type('ABC123456')
    //     cy.get('.MuiButton-label').contains('Sign In').should('be.visible').click()
    //     cy.contains('GreenBay', {timeout:5000}).should('be.visible')
    //     // expect(localStorage.getItem('UserEmail')).to.eq('mashkarharis3@gmail.com')
    // })

    // it('My profile', function(){
    //     cy.get('button[title="menubutton"]').should('be.visible').click()
    //     cy.contains('My Profile').click()
    //     cy.url().should('match', baseUrlMatcherProfile);
    //     cy.get('button[title="menubutton"]').should('be.visible').click()
    //     cy.get('button[title="menuclosebtn"]').should('be.visible').click()
    //     cy.url().should('match', baseUrlMatcherProfile);
    //     cy.get('button[title="iconbtn"]').should('be.visible').click()
    //     cy.contains('Logout').click()
    //     cy.url().should('match', loginUrlMatcher);
    //     expect(localStorage.getItem('UserEmail')).to.be.null
    // })
})