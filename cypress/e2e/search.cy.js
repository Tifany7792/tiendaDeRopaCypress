describe('Search elements',()=>{
  it('search for elements with multiple results', ()=>{
      cy.visit('/');
      cy.fixture('index').then((index)=>{
        cy.get(index.searchBox).type('dress');
        cy.get(index.searchButton).click();
      })
      cy.fixture('searchResult').then((searchResult)=>{
        cy.get(searchResult.title).should('contain','dress');
      
      })
  })
})