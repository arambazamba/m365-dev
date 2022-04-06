//# sourceURL=manipulate.js

function hide() {
    debugger;

    $("#divToggle").hide();
}

function show() {
    debugger;

    $("#divToggle").show();
}

function toggle() {
    debugger;

    $("#divToggle").toggle();
}

function changeColour() {
    debugger;

    $("#divColourful").removeClass("divYellow").addClass("divRed");
}

function addStyle() {
    debugger;

    $('ul#indexing li').eq(1).css({
        'font-size': '20px',
        'padding-left': '20px'
    });
}

function methodChaining() {
    debugger;

    $('#tblPurchases').css("cursor", "pointer");
    $('#tblPurchases tr:odd').addClass('odd')
    .click(function () { console.log('you clicked a tr!'); });
}

function changeValues() {
    debugger;

    $('input[type="text"]').val('new value');
    $('select').val('2');
    $('input[type="checkbox"]').prop('checked', 'checked');
    $('a').attr('title', 'ORF');
}

function changeOrder() {
    debugger;

    var allItems = $('ul#indexing li');
    var liFirst = $('ul#indexing li').first();
    $('ul#indexing').append(liFirst);
    allItems.first().insertAfter(allItems.last());
    var clones = $('ul#indexing li').clone();
    $('ul#indexing').append(clones);

    $('ul#indexing li').click(function () {
        alert($(this).text());
    });

    var removedListItem = $('ul#indexing li').first().remove();
    removedListItem.appendTo('ul#indexing');

    liFirst.trigger('click');

    var replacedListItem = $('ul#indexing li').first().replaceWith('<li>new!</li>');

}