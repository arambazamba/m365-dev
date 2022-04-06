function readNews() {
    debugger;

    var query = "/_api/web/lists/getByTitle('News')/Items";

    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + query,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose"
        },
        success: data => {
            console.log("Success data received", data.d);
            renderNews(data.d.results);
        },
        error: error => {
            console.log("Error happened:", error);
        }
    });
}

function renderNews(items) {
    debugger;

    var html = "<ul>";
    items.forEach(item => {        
        html += `<li>${item.Title}</li>`;
        //console.log("Reading item: ", item.Title);
    });
    html += "</ul>";

    $("#result").html(html); //jQuery Syntax
    // document.getElementById("result").innerHTML = html; JS Native

}

function createList() {
    debugger;

    var body = JSON.stringify({
        '__metadata': { 'type': 'SP.List' },
        'AllowContentTypes': true,
        'BaseTemplate': 100,
        'ContentTypesEnabled': true,
        'Description': 'My REST List',
        'Title': 'MyRestList'
    });

    var digest = $("#__REQUESTDIGEST").val();

    var url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists";

    $.ajax({
        url: url,
        type: "POST",
        data: body,
        headers: {
            //Create needs a specific header
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": digest
        },
        success: data => { console.log("list created") },
        error: err => { console.log(err) }
    });
};

function updateList() {
    debugger;

    var update = JSON.stringify({ '__metadata': { 'type': 'SP.List' }, 'Description': 'A list to test the REST Samples' });

    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('MyRestList')",
        type: "POST",
        data: update,
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "X-HTTP-Method": "MERGE",
            "IF-MATCH": "*"
        },
        success: () => { console.log("list renamed") },
        error: err => { console.log(err) }
    });
}

function addField() {
    debugger;

    var fld = JSON.stringify({
        '__metadata': { 'type': 'SP.Field' },
        'Title': 'My Custom Field',
        'FieldTypeKind': 2,
        'Required': 'true',
        'EnforceUniqueValues': 'false',
        'StaticName': 'My Custom Field'
    });

    var query = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('MyRestList')/Fields";

    $.ajax({
        url: query,
        type: "POST",
        data: fld,
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*"
        },
        success: () => { console.log("field added") },
        error: err => { console.log(err) }
    });
}

function getItems() {
    debugger;

    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/lists/getByTitle('News')/Items?$select=Title",
        type: "GET",
        headers: {
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json; odata=verbose"
        },
        success: data => {
            if (data.d.results) {
                console.log(data.d.results);
            }
        },
        error: err => { console.log(err) }
    });
}

function doExpanding() {
    debugger;

    var url = _spPageContextInfo.webAbsoluteUrl + "/_api/lists/getByTitle('News')/Items?$select=LinkTitle,Author/Name&$expand=Author";

    $.ajax({
        url: url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },
        success: data => {
            console.log(data.d);
        },
        error: err => { console.log(err) }
    });
}


function getUserProps() {
    debugger;

    //Get all properties of current user
    execProfileQuery("/_api/SP.UserProfiles.PeopleManager/GetMyProperties");
    //Get single property of current user
    execProfileQuery("_api/SP.UserProfiles.PeopleManager/GetMyProperties/DisplayName");
    //Get all properties of specific user
    execProfileQuery("_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='spdom\\administrator'");
}


function execProfileQuery(url) {
    
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },
        success: data => {
            console.log(data.d);
        },
        error: err => { console.log(err) }
    });
}


function usingGetItems() {
    debugger;

    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('News')/GetItems(query=@v1)?@v1={\"ViewXml\":\"<View><Query><OrderBy><FieldRef Name='Created' /></OrderBy></Query></View>\"}",
        type: "POST",
        headers: {
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json; odata=verbose"
        },
        success: data => {
            if (data.d.results) {
                console.log(data.d);
            }
        },
        error: err => { console.log(err) }
    });
}

function getListItemType(name) {
    return "SP.Data." + name[0].toUpperCase() + name.substring(1) + "ListItem";
}

function addListItem() {
    debugger;

    // Prepping our update
    var item = {
        "__metadata": { "type": getListItemType("MyRestList") },
        "Title": "CodedItem",
        "My_x0020_Custom_x0020_Field": "My Custom Value"
    };

    // Executing our add
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('MyRestList')/items",
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: () => { console.log("item added to list") },
        error: err => { console.log(err) }
    });

}

function updateListItem() {
    debugger;

    var listTitle = "News";
    var listItemId = 1;
    var item = {
        '__metadata': { 'type': "SP.Data." + listTitle.charAt(0).toUpperCase() + listTitle.slice(1) + "ListItem" },
        'Title': 'The updated REST News'
    };

    var listItemUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('" + listTitle + "')/items(" + listItemId + ")";

    $.ajax({
        url: listItemUri,
        type: "POST",
        data: JSON.stringify(item),
        contentType: "application/json;odata=verbose",
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "X-HTTP-Method": "MERGE",
            "If-Match": "*"
        },
        success: function () {
            console.log('item has been updated');
        },
        error: function (err) { console.log(err) }
    });
}

function deleteListItem() {
    debugger;

    var id = 1;
    var url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('News')/items(" + id + ")";

    $.ajax({
        url: url,
        type: "POST",
        headers: {
            "ACCEPT": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method": "DELETE"
        },
        success: function (data) {
            console.log("Deleted Successfuly.");
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });
}

function deleteList() {
    debugger;

    var target = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getbytitle('MyRestList')";

    $.ajax({
        url: target,
        method: "POST",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method": "DELETE"
        },
        success: function () { console.log("list deleted") },
        error: function (err) { console.log(err) }
    });
}

function createSite() {
    debugger;

    var paramSite = JSON.stringify(
        {
            'parameters': {
                '__metadata': { 'type': 'SP.WebInfoCreationInformation' },
                'Url': 'RestSubWeb',
                'Title': 'RestSubWeb',
                'Description': 'REST created web',
                'Language': 1033,
                'WebTemplate': 'sts#1',
                'UseUniquePermissions': false
            }
        });

    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/webinfos/add",
        type: "POST",
        data: paramSite,
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: function () { console.log("Site created") },
        error: function (err) { console.log(err) }
    });
}

enum SPOperation {
    get,
    create,
    update,
    delete
}

class SPUtil {

    getQuery(query: string) {
        debugger;

        $.ajax({
            url: _spPageContextInfo.webAbsoluteUrl + query,
            type: "GET",
            headers: { "accept": "application/json;odata=verbose" },
            success: data => { console.log("Success data received", data.d.Title); },
            error: error => { console.log("Error happened:", error); }
        });

        $.ajax({
            url: _spPageContextInfo.webAbsoluteUrl + query,
            type: "GET",
            headers: this.getHeaders(SPOperation.get),
            success: data => { console.log("Success data received", data.d.Title); },
            error: error => { console.log("Error happened:", error); }
        });
    }

    getHeaders(operation: SPOperation) {
        let result: any;

        const digest = $("#__REQUESTDIGEST").val();

        switch (SPOperation) {
        case (SPOperation.get) as any:
            result = { "accept": "application/json;odata=verbose" };
            break;
        case (SPOperation.create) as any:
            result = {
                //Create needs a specific header
                "accept": "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": digest
            };
            break;
        default:
        }

        return result;
    }
}

function useUtilClass() {
    debugger;

    let util: SPUtil = new SPUtil();
    util.getQuery("/_api/web");
}