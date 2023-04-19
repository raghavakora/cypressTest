## Technical Task Description ##

Please construct an automated test framework to execute the steps below. 

## How tests are designed
Tests are designed using cypress framework with Javascript
Test will perform the relevant actions as mentioned in below steps
 
## Steps
1. Navigate to the following URL https://www.saucedemo.com/
2. Login using the following details (username: standard_user, password: secret_sauce)
3. Select the highest price item (Please do not use the “Sort By” option on the page).
4. Add the selected highest price item to the cart

# Prerequisites
node and npm should be installed

# Steps to run the tests #
1. Go to Command line and then cd to project folder
2. Run the command 'npm install' to install all node packages of the project
3. npm run test : running all the tests in headless mode
4. npm run test-chrome : running all the tests in chrome where test execution will be visible 

# Test-report
Every Time Test has executed a video of the execution will be available in the project folder location 

Ex: cypressTest/cypress/videos/
