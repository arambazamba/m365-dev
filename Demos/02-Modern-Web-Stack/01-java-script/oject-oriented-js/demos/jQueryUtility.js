//$(document).ready(function() {
//    loadfunction();
//});

loadfunction();

function loadfunction()
{
    $.validator.addMethod("startsWithA", function (value, element) {
        return /^A/.test(value);
    }, 'Field must start with A');


    $('form').validate({
        rules: {
            fullname: {
                required: true,
                startsWithA: true
            },
            password: {
                required: true
            },
            submitHandler: function (form) {
                console.log('ajax being called...');
            },
            invalidHandler: function (event, validator) {
                console.log('number of invalid fields: ' + validator.numberOfInvalids());
            }
        }
    });
}

function useMap() {
    debugger;

    var users = [
      { id: 1, name: "Pajer" },
      { id: 2, name: "Schulz" },
      { id: 3, name: "Müller" }
    ];

    var usernames = $.map(users, function(p) {
        return {
            LastName: p.name
        };
    });

}