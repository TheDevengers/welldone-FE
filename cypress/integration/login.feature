@e2e
Feature: WellDone

  I want to login into the app

  Scenario: An existing user logs into the app
    Given An existing user on the login view
    When He writes his data
    Then He clicks on login
    Then He see the main view of the app