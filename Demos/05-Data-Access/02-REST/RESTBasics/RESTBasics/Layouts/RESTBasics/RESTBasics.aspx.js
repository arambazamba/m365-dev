
//Excellent intro @:
//http://www.codeproject.com/Articles/990131/CRUD-Operation-to-List-Using-SharePoint-Rest-API

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
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": digest
        },
        success: function (data) { console.log("list created") },
        error: function (err) { console.log(err) }
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
            "X-HTTP-Method": "MERGE",
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*"
        },
        success: function () { console.log("list renamed") },
        error: function (err) { console.log(err) }
    });
}

//FieldTypeKind Values: https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.fieldtype.aspx
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

    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('MyRestList')/Fields",
        type: "POST",
        data: fld,
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*"
        },
        success: function () { console.log("field added") },
        error: function (err) { console.log(err) }
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
        success: function (data) {
            if (data.d.results) {
                console.log(data.d.results);
            }
        },
        error: function (err) { console.log(err) }
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
        success: function(data) {
            console.log(data.d);
        },
        error: function (err) { console.log(err) }
    }).then();
}

function usingGetItems() {
    debugger;
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('MyRestList')/GetItems(query=@v1)?@v1={\"ViewXml\":\"<View><Query><OrderBy><FieldRef Name='Created' /></OrderBy></Query></View>\"}",
        type: "POST",
        headers: {
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json; odata=verbose"
        },
        success: function (data) {
            if (data.d.results) {
                console.log(data.d);
            }
        },
        error: function (err) { console.log(err) }
    });
}

function getUserProps() {

    //Get all properties of current user
    execLog("/_api/SP.UserProfiles.PeopleManager/GetMyProperties");
    //Get single property of current user
    execLog("_api/SP.UserProfiles.PeopleManager/GetMyProperties/PictureUrl");
    //Get all properties of specific user
    execLog("_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='sp\\administrator'");
    execLog("_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='i:0%23.f|membership|you@yoursiteurl.onmicrosoft.com");
}

function execLog(url) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },
        success: function (data) {
            console.log(data.d);
        },
        error: function (err) { console.log(err) }
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
        success: function () { console.log("item added to list") },
        error: function (err) { console.log(err) }
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
        success: function() {
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
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getbytitle('MyRestList')",
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
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val() 
    },
        success: function (){ console.log("Site created")},
        error: function (err) { console.log(err) }
    });   
}