@e2e
Feature: Delete Article

  The User delete an article

  Scenario: An existing user delete an article
    Given An existing user on the main view
    When He clicks on delete article icon
    Then The list of articles decrease in one