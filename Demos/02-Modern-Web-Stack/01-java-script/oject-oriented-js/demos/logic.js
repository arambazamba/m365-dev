//# sourceURL=logic.js

function conditions() {
    debugger;

    if (1 == 1) {
        
    }

    if (1=="1") {
        
    }

    if (1 === "1") {
        
    }
    
    var greeting = null;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    }
    else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    console.log(greeting);

    var day = null;
    switch (new Date().getDay()) {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
    }
    console.log(day);

}

function loops() {
    debugger;

    var counter;
    for (counter = 0; counter < 4; counter++) {
        console.log(counter);
    }

    var obj = { a: 1, b: 2, c: 3 };
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log("obj." + prop + " = " + obj[prop]);
        }
    }

    var i = 0;
    while (i < 5) {
        console.log(++i);
    }
    
    for (i = 0; i < 10; i++) {
        if (i === 3) { break; }
        if (i === 7) { continue; }
        console.log("The number is " + i );
    }               
}


