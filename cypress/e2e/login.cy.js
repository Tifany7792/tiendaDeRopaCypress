describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('login with incorrect email',()=>{
        cy.login('something','other')
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).click().should('contain','Invalid email address');
        })
    })
})