//# sourceURL=jQueryEvents.js

function addEvents() {
    debugger;

    $("#container div").each(function (index) {
        $(this).mouseover(function (event) {
            $(event.currentTarget).css("padding-left", "30px");
        });
        $(this).mouseleave(function (event) {
            $(event.currentTarget).css("padding-left", "0");
        });
    }
    );
}

function unbind() {
    debugger;

    $("#unbound").off('click');
}

function log() {
    debugger;

    console.log("clicked");
}

function bindPreventDefault() {
    debugger;

    $("#prevDef").on('click', preventDef);
}

function preventDef(event) {
    debugger;

    event.preventDefault();
    console.log("Tripadvisor blocked by jQuery firewall :-)");
}

function doAnimate(trgt) {
    debugger;

    $(trgt).animate({
                opacity: 0.25,
                fontSize: "30px",
                width: "+=100"
            },
            300,
            function() {
                // executes when the animation is done
            }
        );
}

function addEvttoChildren() {
    debugger;

    $("#divLiveParent").on("click", "button", showTarget);
    $("#nbrInput").on("blur", "input", showTarget);
    $("#nbrInput").on("focus", "input", showTarget);
}

function showTarget() {
    debugger;

    console.log(event.type);    // The event type, eg. "click"
    console.log(event.which);   // The button or key that was pressed.
    console.log(event.target);  // The originating element.
    console.log(event.pageX);   // The document mouse X coordinate.
    console.log(event.pageY);   // The document mouse Y coordinate.
}

function addChildElement() {
    debugger;

    var btn = $("<button/>",{id: "btnC", text: "Button C"});
    $("#divLiveParent").append(btn);
}

function bindCustomEvt() {
    debugger;

    $("btnReset").trigger("resetForm");
    $(".vdElement").on("resetForm", function () {
        $("#fullname").val("");
        $("#password").val("");
    });
}
