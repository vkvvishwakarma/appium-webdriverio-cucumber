Feature: Price validation on product listing page
    Scenario Outline: "Positive test case: - verify the price for product listing page "
        Given user is on the login screen
        When user login with <username> and <password> and click on login button
        Then verify the login error message <message>
        
        Examples:
         | username          | password | message  |
        | bob@example.com   | 10203040 | Products | 

       
