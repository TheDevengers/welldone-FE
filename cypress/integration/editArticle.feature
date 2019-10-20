@e2e
Feature: Edit article

  The User edits an article

  Scenario: An existing user edits an article
    Given An user into home page
    When He clicks on edit article button
    Then He edit the title, introduction and categories of the article
    Then He seeing in the home page the articles and the edited article