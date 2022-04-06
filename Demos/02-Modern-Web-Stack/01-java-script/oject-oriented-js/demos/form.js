//# sourceURL=form.js

function readingForm() {
    debugger;

    //Read and Write to the Elements
    document.getElementById("txtInput").value = 10;
    document.getElementById("cars").value = "saab";
    document.getElementById("ddBrowser").value = "Chrome";
    document.getElementById("message").value = "The cat was playing in the garden";

    document.getElementById("tblResult").innerHTML = '<table border="1" style="width:100%; padding-bottom:30px"><tr><td>Jill</td><td>Smith</td> <td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr></table>';

    var tbl = document.getElementById("tblResult").innerHTML;
    console.log('tblResult content: '  + tbl);
    var car = document.getElementById("cars").value;
    console.log('car: ' + car);
}

function readFromTbl() {
    debugger;

    var tbl = document.getElementById("tblAttributes");
    console.log("tbl has the following class: " + tbl.getAttribute("class"));    
}

function processRow(row) {
    debugger;

    console.log("row has id " + row.id);
    console.log("row has id " + row.getAttribute("id"));
    row.setAttribute("id", "02");
    console.log("row now has id " + row.id);
    console.log("adding some data to the row");
    row.setAttribute("data-myrowkey", JSON.stringify({ "ID": "02", "Name": "xxx" }));
    console.log("row has the following data attached " + row.getAttribute("data-myrowkey"));
}