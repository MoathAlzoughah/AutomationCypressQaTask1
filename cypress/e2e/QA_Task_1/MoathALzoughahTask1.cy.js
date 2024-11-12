describe('Registration Page Selectors', () => {
    //contains
        it('task1', () => {
          cy.visit('https://demo.productionready.io/#/register');
          cy.contains('Sign up')
          cy.contains('Home')
          cy.contains('conduit')
          cy.contains('© 2024. An interactive learning project from Thinkster. Code licensed under MIT.')
  
        });
        
        
  
    }); 