@e2e
Feature: WellDone public web

  I visit the public web of the app

  Scenario: I want to see the public web
    Given An user visit the public web
    Then I see the articles of all users

  Scenario: I want to see the categories
    Given A user in the public web
    When When I click on categories label
    Then I see all categories

  Scenario: I want to see the users
    Given An user in the public web
    When When I click in authors label
    Then I see all authors

  Scenario: I want to search a user
    Given An user visit the public web
    When When I click on authors label
    Then I want to search "test" author
    Then I see only that author

  Scenario: I want to search an article
    Given An user that want to search an article
    When When I searh an article of "stencil"
    Then I see one article of "The Rock" user