Feature: Contact Us Form

Scenario: error messages during
    Given the user visits the contact us page
    When the user submits the form
    Then the user should see error messages

Scenario: error email during
    Given the user visits the contact us page
    When the user fills with invalid email
    And the user submits the form
    Then the user should see an email validation error

Scenario: User submits the contact us form successfully
    Given the user visits the contact us page
    When the user fills in the contact form
    And the user submits the form
    Then the user should see a success message