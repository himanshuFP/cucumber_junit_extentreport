
@smoke
Feature:  Login
  In order to perform successfull Facebook login as a user 
  I want to enter correct username and correct password

  
  Scenario Outlne: In order to verify login to Facebook
    Given User navigates to facebook site
    When user validates the homepage title
    Then User enters the "<username>"  username
    And User enters the "<password>" password
     Then User "<Testoutput>" successfull login
    
    


  
  Scenario Outline: In order to verify login to Facebook as Invalid user
    Given User navigates to facebook site
    When user validates the homepage title
    Then User enters "<username>" username
    And User enters "<password>" password
     Then User "<Testoutput>" successfull login
     Then User Enters the age
|1|
|2|
|3|

   Examples:
   |username|password|Testoutput|
   |valid   |valid   |shouldbe  |
   |invalid |invalid |shouldnot |




    


  
