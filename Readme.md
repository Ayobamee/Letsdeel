The pageobjects folders contains folders that captures all D.O.M elements with the functions for each actions to be performed. For example, the LoginPage has all the D.O.M for logging in and also a function that performs the login action.
The POManager has all the imports for the different pageobjects, which also contains functions that can be accessed in the spec.js file.
The utils folder has two files, one with the function for generating random characters and also the test data ie username and password for the test.
The spec.js filles under the test folder has all the tests to be performed. There are imports from the POManager and also instances of classes for each test to be performed. The beforeeach test block contains steps to login to the app and its assertions also.
The package.json file has the different configs for the running the test eg 'npm run regression' will run the spec.js in headful mode on the webkit ie safari browser.
The allure-results folder has the reports for the tests run.
The two tests ie Fixedcontract and Payasyougo contract creation are running in parallel, i configured 2 workers in the congig.js file to make this happen. 
The project was committed to the main branch on the project directory on github.