$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "\r\nAs a user I want to use login and logout functionality of orangeHrm Website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15436804200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 736064700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should login and see the welcome text successfully",
  "description": "",
  "id": "login-functionality;user-should-login-and-see-the-welcome-text-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    },
    {
      "line": 9,
      "name": "@Smoke"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter userName \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see welcomeText \"Welcome Paul\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginStepDefs.iEnterUserName(String)"
});
formatter.result({
  "duration": 334295300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 197913200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1976306600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome Paul",
      "offset": 26
    }
  ],
  "location": "LoginStepDefs.iShouldSeeWelcomeText(String)"
});
formatter.result({
  "duration": 121660600,
  "status": "passed"
});
formatter.after({
  "duration": 2561971100,
  "status": "passed"
});
formatter.before({
  "duration": 11823279500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should log out successfully and after that verify Login Panel message",
  "description": "",
  "id": "login-functionality;user-should-log-out-successfully-and-after-that-verify-login-panel-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Smoke"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter userName \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on welcome text",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"LOGIN Panel\" text on homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginStepDefs.iEnterUserName(String)"
});
formatter.result({
  "duration": 734779200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginStepDefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 259529700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1969435500,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardStepDefs.iClickOnWelcomeText()"
});
formatter.result({
  "duration": 194271500,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardStepDefs.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 1603894100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN Panel",
      "offset": 14
    }
  ],
  "location": "DashBoardStepDefs.iShouldSeeTextOnHomepage(String)"
});
formatter.result({
  "duration": 131988000,
  "status": "passed"
});
formatter.after({
  "duration": 2298621200,
  "status": "passed"
});
});