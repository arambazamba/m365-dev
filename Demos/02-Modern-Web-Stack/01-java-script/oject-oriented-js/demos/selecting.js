//# sourceURL=selecting.js

function Selectors() {
    debugger;

    $("#idSelector").hide();
    $(".classSelector").css({ "background-color": "red" });
    $("span").unbind("click");
    $("span").click(function() {
        console.log("You clicked the span");
    });
}

function testSelection() {
    debugger;

    var li = $('li');
    if ($(li).length > 0) {
        // Correct! This code will only run if there's an element in your page
        // with an ID of 'nonexistent'
        console.log("found items in list");
    }
}

function indexingSelection() {
    debugger;

    var li = $('ul#indexing li');
    var li0 = $(li)[0].innerHTML;
    var li3 = $(li).eq(2);
    var li3special = $(li).eq(2).is(".special");
    var li4special = $(li).eq(3).is(".special");
}

function filtering() {
    debugger;

    var listItems = $('ul#indexing li');

    // filter the selection to only items with a class of 'special'
    var special = listItems.filter('.special');

    // filter the selection to only items without a class of 'special'
    var notSpecial = listItems.not('.special');

    // filter the selection to only items that contain a span
    var hasSpans = listItems.has('span');
}

function findRelatives()
{
    // get the first list item on the page
    var listItem = $('li').first(); // also: .last()

    // get the siblings of the list item
    var siblings = listItem.siblings();

    // get the next sibling of the list item
    var nextSibling = listItem.next(); // also: .prev()

    // get the list item's parent
    var list = listItem.parent();

    // get the list items that are immediate children of the list
    var listItems = list.children();

    // get ALL list items in the list, including nested ones
    var allListItems = list.find('li');

    // find all ancestors of the list item that have a class of "module"
    var modules = listItem.parents('.module');

    // find the closest ancestor of the list item that has a class of "module"
    var module = listItem.closest('.module');
}

function iteration() {
    debugger;

    $('ul#indexing li').each(function (index, elem) {
        // this: the current, raw DOM element
        // index: the current element's index in the selection
        // elem: the current, raw DOM element (same as this)
        $(elem).prepend('<b>' + index + '. </b>');
    });
}
