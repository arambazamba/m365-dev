$(document).ready(function () {
    GetVouchers();
});

function GetVouchers() {
    var url = _spPageContextInfo.webAbsoluteUrl + "/_api/lists/getByTitle('Vouchers')/Items";
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json; odata=verbose"
        },
        success: function (data) {
            if (data !=null && data.d!=null) {
                setTable(data.d.results);
            }
        },
        error: function (msg) { console.log(msg) }
    });
}

function mapVoucher(voucher) {
    var result = $.map(voucher, function (v) {
        return {
            ID: v.VoucherId,
            Amount: v.Amount,
            Title: v.Title,
            Date: v.Date,
            Paid: v.Paid
        };
    });
    return result;
}

function setTable(data) {
    $('#tblContactsBody').empty();
    $('#tblContactsPager').empty();
    let vs = mapVoucher(data);
    vs.forEach(function (item) {
        $('#tblContactsBody').append(
      '<tr data-item="' + JSON.stringify(item) + '" style="cursor:pointer">' +
        '<td>' + item.ID + '</td>' +
        '<td>' + item.Title + '</td>' +
        '<td>' + item.Date + '</td>' +
        '<td>' + item.Amount + '</td>' +
        '<td>' + item.Paid + '</td>' +
      '</tr>');
    });
    
    $('#tblContactsBody').append("</table>");

    doPaging({ pagerSelector: '#tblContactsPager', showPrevNext: true, hidePageNumbers: false, perPage: 2, showAll: false}, $('#tblContactsBody'));

    $('#tblContactsBody tr').click(function (e) {
        console.info("fetching data item with id=" + e.currentTarget.id);
    });
}

function doPaging(opts, tag) {
    var $this = tag,
        defaults = {
            perPage: 7,
            showPrevNext: false,
            hidePageNumbers: false,
            showAll: false
        },
        settings = $.extend(defaults, opts);

    var listElement = $this;
    var perPage = settings.perPage;
    var children = listElement.children();
    var showAll = settings.showAll;
    var pager = $('.pager');

    if (typeof settings.childSelector != "undefined") {
        children = listElement.find(settings.childSelector);
    }

    if (typeof settings.pagerSelector != "undefined") {
        pager = $(settings.pagerSelector);
    }

    if (showAll === false) {
        var numItems = children.size();
        var numPages = Math.ceil(numItems / perPage);

        pager.data("curr", 0);


        if (settings.showPrevNext) {
            $('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);
        }

        var curr = 0;
        while (numPages > curr && (settings.hidePageNumbers === false)) {
            $('<li><a href="#" class="page_link">' + (curr + 1) + '</a></li>').appendTo(pager);
            curr++;
        }

        if (settings.showPrevNext) {
            $('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);
        }

        pager.find('.page_link:first').addClass('active');
        pager.find('.prev_link').hide();
        if (numPages <= 1) {
            pager.find('.next_link').hide();
        }
        pager.children().eq(1).addClass("active");

        children.hide();
        children.slice(0, perPage).show();

        pager.find('li .page_link').click(function () {
            var clickedPage = $(this).html().valueOf() - 1;
            goTo(clickedPage, perPage);
            return false;
        });
        pager.find('li .prev_link').click(function () {
            previous();
            return false;
        });
        pager.find('li .next_link').click(function () {
            next();
            return false;
        }
        );
    }

    if (showAll) {
        $('<li><a href="javascript:SwitchPaged(true)" class="show_all">Pager anzeigen</a></li>').appendTo(pager);
    } else {
        $('<li><a href="javascript:SwitchPaged(false)" class="show_all">Alle anzeigen</a></li>').appendTo(pager);
    }

    function previous() {
        var goToPage = parseInt(pager.data("curr")) - 1;
        goTo(goToPage);
    }

    function next() {
        var goToPage = parseInt(pager.data("curr")) + 1;
        goTo(goToPage);
    }

    function goTo(page) {       
        var startAt = page * perPage,
            endOn = startAt + perPage;

        children.css('display', 'none').slice(startAt, endOn).show();

        if (page >= 1) {
            pager.find('.prev_link').show();
        }
        else {
            pager.find('.prev_link').hide();
        }

        if (page < (numPages - 1)) {
            pager.find('.next_link').show();
        }
        else {
            pager.find('.next_link').hide();
        }

        pager.data("curr", page);
        pager.children().removeClass("active");
        pager.children().eq(page + 1).addClass("active");
    }
};