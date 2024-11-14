describe('Registration Page Selectors', () => {

  // cy.contains('')
  
          it('contains', () => {
            cy.visit('https://demo.productionready.io/#/register');

            cy.contains('Sign up');
            cy.contains('Home');
            cy.contains('conduit');
            cy.contains('Have an account?');
            cy.contains('© 2024. An interactive learning project from Thinkster. Code licensed under MIT.');  
          });

  // .first(''), .last(''),  .eq('')

    it('.first(), .last(), .eq()', () => {
      cy.visit('https://demo.productionready.io/#/register');
      
      cy.get('li.nav-item').last();
      cy.get('li.nav-item').first();
      cy.get('li.nav-item').eq(1).next();
      cy.get('li.nav-item').eq(1).prev();
      cy.get('p').next().next();
      cy.get('h1');
      cy.get('a').next().next().prev().prev();
      cy.get('span').prev();

    }); 

//  filter(''), not('')
  
 
  it('.filter(), .not()', () => {

    cy.visit('https://demo.productionready.io/#/register');

    cy.get('a').filter('.active');
    cy.get('a').not('.active')
    cy.get('button').filter('.btn');
    cy.get('a').not('.navbar-brand');  
    cy.get('a').filter('.navbar-brand');

  });

// cy.get(''), find(''), 
  
it('cy.get(), cy.find(), cy.children()', () => {
  
  cy.visit('https://demo.productionready.io/#/register');

  cy.get('form').find('input')
  cy.get('form').find('input[placeholder="Username"]').type('MoathAlzoughah')
  cy.get('form').find('input[placeholder="Email"]').type('Moath.Alzoughah@gmail.com')
  cy.get('form').find('input[placeholder="Password"').type('moath123456')
  cy.get('form').find('button[type="submit"]')

});


});
