
function consumeService() {
    debugger;

    $.ajax({
        type: "GET",
        url: "http://northwind.servicestack.net/customers",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(JSON.stringify(data));
        },
        error: function () {
            alert('Fehler beim Speichern');
        }
    });
}