(function(Scenario, Given, When, Then, And) {
    
    Scenario("Set some values in form");
        Given("I set name value as 'Henrique'");
        And("I set age value as '27'");
        Then("The name value should be 'Henrique'");

    Scenario("Set other values in form");
        Given("I set name value as 'Daiane'");
        And("I set age value as '29'");
        Then("The name value should be 'Daiane'");

    GiWThen.report();

}).apply(this, GiWThen.globals);
