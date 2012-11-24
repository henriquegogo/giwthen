(function() {
    var currentScenario = "";
    var executedTests = 0;
    var successTests = 0;
    var errorTests = 0;

    var Scenario = function(text) {
        self.Steps.Before();

        currentScenario = text;
    };

    var Given = When = Then = And = function(testText) {
        var steps = self.Steps;

        for (step in steps) {
            var runStep = steps[step];
            var matches = new RegExp(step).exec(testText);
            
            if (matches) {
                matches.shift();
                runStep.apply(this, matches);
            }
        }
    };

    var Assert = function(condition) {
        executedTests++;

        if (condition) {
            successTests++;

        } else {
            errorTests++;
            console.log("Error on '" + currentScenario + "' scenario");
        }
    };

    var TestResult = function() {
        console.log(successTests + "/" + executedTests + " tests with success. " + errorTests + " with error");
    };

    var self = {
        Steps: {},
        Assert: Assert,
        TestResult: TestResult,
        Globals: [Scenario, Given, When, Then, And]
    };

    window.GiWThen = self;
})();
