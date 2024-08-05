Feature: Login Functionality

  Scenario Outline: User logs in with differnet credentials

    Given Navigate to the Login Page 
    When I login with <username> and <password>
    Then Validatation message should be <message>

    Examples:
      | username            | password  | message                                                     |
      | alice@example.com   | 10203040  | Sorry, this user has been locked out.                       |
      | 1@2.com             | f-o-o     | Provided credentials do not match any user in this service. |
      |                     |           | Username is required                                        |
      | bob@example.com     |           | Password is required                                        |
      | bob@example.com     | 10203040  | Logged In! since Go shopping button is displayed            |