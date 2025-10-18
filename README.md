# WDIO Test Practice

This project provides a modular and scalable setup for automated browser testing using **WebdriverIO** with the **Mocha** framework. It emphasizes maintainability by organizing helpers, test data, and test cases into separate components.

# Run test suites

npm run tests - this command will run all tests in the **tests** folder

## Project Structure

├── helpers/ # Reusable helper functions
│ └── navHelpers.js
│
├── pageElements/ # Page element selectors in JSON format
│ ├── commonPageElements.json
│ └── loginPage.json
│
├── tests/ # Test cases
│ └── loginTest.js
│
├── .env # Environment-specific variables (optional)
├── .gitignore # Specifies files/folders to ignore in Git
├── constants.js # Constants used in the project
├── package.json # Project metadata and scripts
├── package-lock.json # Lockfile for dependency versions
├── wdio.conf.js # WebdriverIO configuration file
├── README.md # Project documentation

---

## Setup Instructions

1. **Install all dependencies:**
   npm install

2. **Key Dependencies:**

@wdio/cli
– CLI for setting up and running WebdriverIO

@wdio/local-runner
– Runs tests locally

@wdio/mocha-framework
– Integrates Mocha testing framework

@wdio/spec-reporter
– Provides clean test output in console

@wdio/visual-service
– Enables visual regression testing

dotenv
– Loads environment variables from .env file
