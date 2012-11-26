(function(Scenario, Given, When, Then, And) {
    
    Scenario("Search something");
        Given("I enter in url 'http://localhost/'");
        And("I wait 1 secs");

    GiWThen.report();

}).apply(this, GiWThen.globals);
