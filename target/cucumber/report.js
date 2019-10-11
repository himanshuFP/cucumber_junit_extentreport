$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login",
  "description": "In order to perform successfull Facebook login as a user \r\nI want to enter correct username and correct password\r\n\r\n\r\nScenario Outlne: In order to verify login to Facebook\r\n  Given User navigates to facebook site\r\n  When user validates the homepage title\r\n  Then User enters the \"\u003cusername\u003e\"  username\r\n  And User enters the \"\u003cpassword\u003e\" password\r\n   Then User \"\u003cTestoutput\u003e\" successfull login",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 19,
  "name": "In order to verify login to Facebook as Invalid user",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook-as-invalid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User navigates to facebook site",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters \"\u003cusername\u003e\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User enters \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User \"\u003cTestoutput\u003e\" successfull login",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User Enters the age",
  "rows": [
    {
      "cells": [
        "1"
      ],
      "line": 26
    },
    {
      "cells": [
        "2"
      ],
      "line": 27
    },
    {
      "cells": [
        "3"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook-as-invalid-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Testoutput"
      ],
      "line": 31,
      "id": "login;in-order-to-verify-login-to-facebook-as-invalid-user;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "shouldbe"
      ],
      "line": 32,
      "id": "login;in-order-to-verify-login-to-facebook-as-invalid-user;;2"
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "shouldnot"
      ],
      "line": 33,
      "id": "login;in-order-to-verify-login-to-facebook-as-invalid-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "In order to verify login to Facebook as Invalid user",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook-as-invalid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User navigates to facebook site",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters \"valid\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User enters \"valid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User \"shouldbe\" successfull login",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User Enters the age",
  "rows": [
    {
      "cells": [
        "1"
      ],
      "line": 26
    },
    {
      "cells": [
        "2"
      ],
      "line": 27
    },
    {
      "cells": [
        "3"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_site()"
});
formatter.result({
  "duration": 284509150,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 13
    }
  ],
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "duration": 4112693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 13
    }
  ],
  "location": "LoginStep.user_enters_password(String)"
});
formatter.result({
  "duration": 583568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldbe",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_successfull_login(String)"
});
formatter.result({
  "duration": 987370,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_Enters_the_age(Integer\u003e)"
});
formatter.result({
  "duration": 2341202,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "In order to verify login to Facebook as Invalid user",
  "description": "",
  "id": "login;in-order-to-verify-login-to-facebook-as-invalid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User navigates to facebook site",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters \"invalid\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User enters \"invalid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User \"shouldnot\" successfull login",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User Enters the age",
  "rows": [
    {
      "cells": [
        "1"
      ],
      "line": 26
    },
    {
      "cells": [
        "2"
      ],
      "line": 27
    },
    {
      "cells": [
        "3"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_site()"
});
formatter.result({
  "duration": 91231,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 41189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 13
    }
  ],
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "duration": 983135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 13
    }
  ],
  "location": "LoginStep.user_enters_password(String)"
});
formatter.result({
  "duration": 213641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_successfull_login(String)"
});
formatter.result({
  "duration": 622062,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_Enters_the_age(Integer\u003e)"
});
formatter.result({
  "duration": 606664,
  "status": "passed"
});
});