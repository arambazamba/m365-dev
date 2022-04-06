//# sourceURL=eventBubbling.js

var propagate = true;

window.onload = function() {
    writePropagation();
}

function addEvt(id) {
    debugger;

    var div = document.getElementById("div" + id);
    div.addEventListener("click", function (evt) {        
        if (propagate===false) {
            evt.stopPropagation();            
        }
        console.log("Event was raised in " + this.id);
    }, false);
    console.log("eventlistener bound to div " + id);
}

function removeAll() {
    debugger;

    var divs = document.getElementsByClassName("bubbleDiv");
    for (var i = 0; i < divs.length; i++) {
        divs[i].removeEventListener("click",null);
    }
    console.log("all eventlisteners removed");
}

function tooglePropagation() {
    debugger;

    propagate = !propagate;
    writePropagation();
}

function writePropagation() {
    debugger;
    document.getElementById("divStatus").innerHTML = "Event Propgation active: " + propagate;
}
