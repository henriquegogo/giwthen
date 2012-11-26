(function() {
    var currentScenario = "";
    var reportData = {
        done: [],
        success: [],
        error: []
    }

    var mergeObject = function(obj1, obj2) {
        for (attr in obj2) obj1[attr] = obj2[attr];
        return obj1;
    };

    var scenario = function(text) {
        self.steps.Before();

        currentScenario = text;
    };

    var given = when = then = and = function(testText) {
        var steps = self.steps;

        for (step in steps) {
            var runStep = steps[step];
            var matches = new RegExp(step).exec(testText);
            
            if (matches) {
                matches.shift();
                runStep.apply(this, matches);
            }
        }
    };

    var assert = function(condition) {
        reportData.done.push(currentScenario);

        if (condition) {
            reportData.success.push(currentScenario);

        } else {
            reportData.error.push(currentScenario);
        }
    };

    var report = function() {
        console.log(reportData.success.length + "/" + reportData.done.length + " tests with success. " + reportData.error.length + " with error");
        console.log(reportData);
    };

    var self = {
        steps: {
            add: function(newSteps) {
                mergeObject(this, newSteps);
            }
        },
        assert: assert,
        report: report,
        globals: [scenario, given, when, then, and]
    };

    window.GiWThen = self;
})();
