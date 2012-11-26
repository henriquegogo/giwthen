(function() {
    var assert = GiWThen.assert;
    var sandbox;

    GiWThen.steps.add({
        Before: function() {
            sandbox = window.open();
        },
        After: function() {
            if (sandbox)
                sandbox.close();
        },
        "I enter in url '(.*)'": function(url, callback) {
            sandbox.location.href = url;
            return callback();
        },
        "I wait (.*) secs": function(secs, callback) {
            setTimeout(function() {
                return callback();
            }, (secs * 1000))
        },
        "I set (.*) value as '(.*)'": function(inputName, value) {
            sandbox.document.querySelector("#" + inputName).value = value;
        },
        "The (.*) value should be '(.*)'": function(inputName, value) {
            var inputValue = sandbox.document.your_form[inputName].value;

            assert(inputValue == value);
        }
    });

})();
