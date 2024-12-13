import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";

Given("Navigate on the homepage",() => {

cy.visit("/");

})


When("Navigate to the Whats New page",() => {

cy.get('nav')

cy.contains("What's New").click();

})


Then("Should see a list of all categories displayed in the section",() => {


cy.get('.categories-menu li').should('be.visible');
    
})


Then("Print the names of these categories", () => {
       
cy.get('.categories-menu li').then((categories) => {
            
    for (let i = 0; i < 6;i++ ) {categories[12]
        cy.wrap(categories[i]).invoke('text').then((categoryName) => {
        cy.log(categoryName);

     });

  }

 });


});

        
        
    



