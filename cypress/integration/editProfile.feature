@e2e
Feature: Edit profile info

  The User edits his profile information

  Scenario: An existing user edits his profile
    Given An existing user looged into the app
    When He clicks on edit profile button
    Then He edit his name and surname and send it
    Then He see his new profile information