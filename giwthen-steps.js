(function() {
    var assert = GiWThen.assert;

    GiWThen.steps.add({
        Before: function() {
            return "";
        },
        "I enter in url '(.*)'": function(url) {
            document.container.location.href = url;
        },
        "I wait (.*) secs": function(secs) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > (secs * 1000)) {
                    break;
                }
            }
        },
        "I set (.*) value as '(.*)'": function(inputName, value) {
            document.querySelector("#" + inputName).value = value;
        },
        "The (.*) value should be '(.*)'": function(inputName, value) {
            var inputValue = document.your_form[inputName].value;

            assert(inputValue == value);
        }
    });

})();
