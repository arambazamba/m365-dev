//# sourceURL=dates.js

function dateFormat() {
    debugger;
    var date = new Date();
    // Using Intl.DateTimeFormat
    console.log(new Intl.DateTimeFormat('de-AT').format(date));

    // Using options
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    console.log(new Intl.DateTimeFormat('de-AT', options).format(date));

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    console.log(day, monthNames[monthIndex], year);
}

function usingMoments() {
    debugger;
    console.log("Using moments.js with Dates");
    console.log("Date format: " + moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log("Relative time: " + moment("20111031", "YYYYMMDD"));
    console.log("Add time: " + moment().add(1, 'days'));
    console.log(moment("13-02-99", "DD-MM-YY").format('YYYY-MM-DD'));
    console.log(moment("13.02.2016", "DD-MM-YYYY").format('YYYY-MM-DD'));
}

function usingPrototype() {
    debugger;
    var dt = new Date();
    console.log(dt.toGermanDate());
}

function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

Date.prototype.toGermanDate = function() {
    var day = this.getDate();
    var month = this.getMonth() + 1; //Index is 0 based - months 0 to 11!
    var year = this.getFullYear();
    return day + ". " + leftPad(month,2) + ". " + year;
}