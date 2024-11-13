describe('Registration Page Selectors', () => {

  // cy.contains
  
          it('contains', () => {
            cy.visit('https://demo.productionready.io/#/register');
            cy.contains('Sign up')
            cy.contains('Home')
            cy.contains('conduit')
            cy.contains('© 2024. An interactive learning project from Thinkster. Code licensed under MIT.')   
          });
  
  
  // cy.first(), cy.last(), cy.eq()
  
    it('.first(), .last(), .eq()', () => {
      cy.visit('https://demo.productionready.io/#/register');
      cy.get('li.nav-item').last()
      
      cy.get('li.nav-item').first()
      cy.get('li.nav-item').eq(1)         
      
    });
  
  
// cy.filter(), cy.not()
  
 
  it('.filter(), .not()', () => {

    cy.visit('https://demo.productionready.io/#/register');
    cy.get('button').filter('.btn').should('contain', 'Sign up');  
    cy.get('a').not('.navbar-brand').should('exist');              

  });

  
//cy.get(), cy.find(), cy.children()
  
it('cy.get(), cy.find(), cy.children()', () => {
  cy.visit('https://demo.productionready.io/#/register');
  cy.get('form').should('exist'); 
  cy.get('form').find('input[placeholder="Username"]').should('be.visible'); 
  cy.get('form').find('input[placeholder="Email"]').should('be.visible');    
  cy.get('form').find('input[placeholder="Password"]').should('be.visible'); 
  cy.get('form').find('button[type="submit"]').should('contain', 'Sign up').and('be.enabled'); 
});
  
  
   }); 