## Technical Task Description ##

Technical Test Guidance for candidate

Please construct an automated test framework to execute the steps below. This can be done in any language and framework of your choice. This can be written entirely from scratch, or by building on existing templates, and following any format that you would like to use. Please upload your work to a git repository and share the link with us prior to your interview.

 

We will ask you about your choices and for you to make some changes to what is tested during the technical interview.

 
Steps
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

