//# sourceURL=domevents.js

function changeLamp() {
    debugger;

    var state = document.getElementById("chkLampState").checked ? "on" : "off";
    var jqstate = $("#chkLampState");
    var stateES6 = document.querySelector("#chkLamp");


    var img = "/css/images/lamp_" + state + ".png";
    var lampImg = document.getElementById("imgLamp");
    lampImg.src = img;
    var statusDiv = document.getElementById("statusSpan");
    statusDiv.innerHTML = "The lamp is " + state;
}

function setTimeOut() {
    debugger;

    console.log("settings timer");
    var timer = setTimeout('doBang()', 3000);
}

function createUL() {
    debugger;

    var ul = document.getElementById("ulMonths");
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < 12; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(months[i]));
        ul.appendChild(li);
    }
}

function doBang() {
    debugger;

    console.log("timeout reached");
    var div = document.getElementById("theHiddenDiv");
    if (div != null) {
        div.style.display = "block";
    }
}

function divOnMouseOver() {
    debugger;

    var span = document.getElementById("spanMsg");
    if (span==null) {
        var div = document.getElementById("divMousecontainer");
        span = document.createElement('span');
        span.id = "spanMsg";
        div.appendChild(span);
    }
    span.innerHTML = "OUCH! ... don't mouse me! @" + new Date().toLocaleTimeString();
}

function getComboboxVal(option) {
    debugger;

    console.log("The combobox has the value " + option.value);
}

function onTextChange(value) {
    debugger;

    document.getElementById("lblResult").innerHTML = "You just wrote: " + value.value;
}

function changeLayout() {
    debugger;

    var divs = Array.prototype.slice.call(document.getElementsByClassName("menuDiv"));
    var ul = document.getElementById("menu");

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        if (i!=divs.length-1) {
            var li = document.createElement("li");
            li.style.cursor = "pointer";
            li.appendChild(document.createTextNode(div.id));
            li.onclick = function () {
                var current = document.getElementsByClassName("menuDiv");
                current[0].className = "menuDivInactive";
                var chosen = document.getElementById(this.innerText);
                chosen.className = "menuDiv";
            }
            ul.appendChild(li);

        }
        if (i != 0) {
            div.className = "menuDivInactive";
        }
    }
}