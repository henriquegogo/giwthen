(function(Assert) {

    GiWThen.Steps = {
        Before: function() {
            document.body.innerHTML = "\
                <form name='your_form'>\
                    <label>Name</label>\
                    <input type='text' name='name'><br>\
                    <label>Age</label>\
                    <input type='text' name='age'><br>\
                    <input type='submit'>\
                </form>\
            ";
        },
        "I set (.*) value as '(.*)'": function(inputName, value) {
            document.your_form[inputName].value = value;
        },
        "The (.*) value should be '(.*)'": function(inputName, value) {
            var inputValue = document.your_form[inputName].value;

            Assert(inputValue == value);
        }
    };

})(GiWThen.Assert);
