@e2e
Feature: Logout

  I want to logout of the app

  Scenario: I want to logout of the app
    Given I logged into the app
    When I click the logout button
    Then My session is closed and I go to the login view