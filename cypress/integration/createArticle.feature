@e2e
Feature: Create Article

  The User create an article

  Scenario: An existing user create an article
    Given An existing user in the app
    When He clicks on create article icon
    Then He see the create article form
    Then He fill in the form and send it
    Then The list of articles increase in one