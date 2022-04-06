$(document).ready(function() {
    console.log("Date format: " + moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log("Relative time: " + moment("20111031", "YYYYMMDD"));
    console.log("Add time: " + moment().add(1, 'days'));
    console.log(moment("13-02-99", "DD-MM-YY").format('YYYY-MM-DD'));
    console.log(moment("13.02.2016", "DD-MM-YYYY").format('YYYY-MM-DD'));


    
    console.log("finished");
});