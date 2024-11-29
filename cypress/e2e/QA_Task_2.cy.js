
/// reference> types ="cypress" />

// task_2

// c- Create a test case to validate that the user can update products from the shopping cart.

describe('the user can update products from the shopping cart', () => {

    beforeEach(()=>{
       
        cy.log("this is beforeEach")
    })


it ('Add 2 random items and delete 1 of them and update the shopping cart.', () => {

    cy.visit("/")
    cy.wait(1000)
    cy.get("#search").type("men t-shirt")
    cy.wait(3000)
    cy.get("#search").click()
    cy.get(".product-item-link").eq(2).click()
    cy.get("#option-label-size-143-item-169").click()
    cy.get("#option-label-color-93-item-52").click()
    cy.get("[type=number]").clear().should("be.empty").type(2).click()
    cy.get("#product-addtocart-button").click()
    cy.wait(3000) 
    cy.get("#search").type("men t-shirt")
    cy.wait(3000)
    cy.get("#qs-option-0").click()
    cy.get(".product-item-link").eq(2).click()
    cy.get("#option-label-size-143-item-169").click()
    cy.get("#option-label-color-93-item-58").click()
    cy.wait(1000)
    cy.get("#qty").should("be.empty").type(4).click()
    cy.get("#product-addtocart-button").click()
    cy.wait(3000)
    cy.get("a.showcart").click()
    cy.wait(1000)
    cy.contains("View and Edit Cart").click()
    cy.get("[title='Remove item']").eq(1).click({force: true});
    cy.wait(2000)
    cy.contains("Update Shopping Cart").click({force: true})
});

after(()=>{
    cy.log("This is after Each hook")
})

})


// 3. Create a test case to validate that the user can submit a review on the product page.

describe('The user can submit a review on the product page', () => {

    beforeEach(() => {
        cy.visit("https://magento.softwaretestingboard.com/"); // Open the Magento demo site
        cy.log("Navigated to the Magento demo site");
       
        
    });

    it ('should allow submitting a product review', () => {
     cy.visit("/")
     cy.wait(1000)
     cy.get("#search").type("men t-shirt")
     cy.wait(3000)
     cy.get("#search").click()
     cy.get(".product-item-link").eq(2).click()
     cy.get("#option-label-size-143-item-169").click()
     cy.get("#option-label-color-93-item-52").click()
     cy.get("[type=number]").clear().should("be.empty").type(2).click()
     cy.get("#product-addtocart-button").click()
     cy.wait(3000)
     cy.get("#tab-label-reviews-title").click()
     cy.get("#reviews").should("be.visible"); 
     cy.get("#Rating_5").click({force: true});
     cy.get("#nickname_field").type("MoathaAlzoughah")
     cy.get("#summary_field").type("Great Product")
     cy.get("#review_field").type("Highly recommended!")
     cy.contains("Submit Review").click()
     cy.contains("You submitted your review for moderation.").should(('be.visible'))


    });

    after(() => {

        cy.log("");
    });
});


