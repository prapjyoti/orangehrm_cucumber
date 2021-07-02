Feature: Login Functionality

  As a user I want to use login and logout functionality of orangeHrm Website


  Background:
    Given I am on home Page

  @Sanity@Smoke@Regression
  Scenario: User should login and see the welcome text successfully
    When I enter userName "Admin"
    And  I enter Password "admin123"
    And  I click on login button
    Then I should see welcomeText "Welcome Paul"

@Smoke@Regression
  Scenario: User should log out successfully and after that verify Login Panel message
    When I enter userName "Admin"
    And  I enter Password "admin123"
    And  I click on login button
    And  I click on welcome text
    And  I click on logout button
    Then I should see "LOGIN Panel" text on homepage







