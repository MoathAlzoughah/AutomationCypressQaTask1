Feature: Print all categories in the New In Womens section In What's New page. 


  Scenario: Print all categories in the New In Womens section In What's New page.
  
    Given Navigate on the homepage
    When Navigate to the Whats New page
    Then Should see a list of all categories displayed in the section
    And Print the names of these categories

