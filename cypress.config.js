const { defineConfig } = require("cypress");

const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {

    specPattern: "**/*.feature",
   // specPattern:"**/*.{feature,cy.js}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    on("file:preprocessor", cucumber());
  
    },
   

    baseUrl:"https://magento.softwaretestingboard.com/",
    // viewportHeight: 800,
    // viewportWidth: 800,
    // watchForFileChanges:true,
    video:false,
    videosFolder:"My Videos Folder",
    videoCompression:0,
    
    reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/myReport", // where to save in directory
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss",
    }


    
  },




});
