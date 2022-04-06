console.log("script loaded");

window.onload = function () {
    console.log("windows.onload executed");
}

$(document).ready(function () {
    console.log("document ready fired");
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Dom fully loaded and parsed");
});