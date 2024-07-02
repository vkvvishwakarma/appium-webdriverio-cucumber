Feature: App login module verification
  
  Scenario Outline: Negative case for login with invalid credential
    Given user is on the login screen
    When user login with <username> and <password> and click on login button
    Then verify the successful login or error <message>
    Examples:
      | username       | password | message                  |
      | 1@2.com        | f-o-o    | invalid credential       |
      | ""             | ""       | Your username is invalid!|
      |bob@example.com |  ""      | Invalid password         |

  Scenario Outline: Positive case for login with standard credential
    Given user is on the login screen
    When user login with <username> and <password> and click on login button
    Then verify the successful login or error <message>
    Examples:
      | username          | password | message                        |
      | alice@example.com | 10203040 | sorry, this user locked        |
      # | bob@example.com   | 10203040 | You logged into a secure area! |
    