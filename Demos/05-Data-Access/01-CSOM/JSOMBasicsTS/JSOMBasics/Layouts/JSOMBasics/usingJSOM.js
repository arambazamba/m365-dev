$(document).ready(function () {
    console.log("Logging: _spPageContextInfo :", _spPageContextInfo);
});
function onErr(sender, args) {
    console.log('Request failed. ' + args.get_message());
    console.log(args.get_stackTrace());
}
function usingClientContect() {
    debugger;
    var cctx;
    cctx = new SP.ClientContext(); //Connect to the default context
    cctx = SP.ClientContext.get_current(); //Alternative to above
    cctx = new SP.ClientContext("http://sp2016"); //Connect to a specific Url
    cctx = new SP.ClientContext("/jsomweb"); //Connect to a subweb
}
function Batching() {
    debugger;
    var cctx = new SP.ClientContext();
    var web = cctx.get_web();
    var lists = web.get_lists();
    cctx.load(web, 'Title', 'Created');
    cctx.load(lists);
    cctx.executeQueryAsync(function () {
        console.log("Successfully loaded web and lists", web.get_title(), lists);
    }, onErr);
}
function exceptionHandling() {
    debugger;
    var template = SP.ListTemplateType.genericList;
    var desc = "Created programmatically to demonstrate JSOM error handling";
    var cctx = new SP.ClientContext();
    var listName = "errHandlingList";
    var errScope = new SP.ExceptionHandlingScope(cctx);
    var scopeStart = errScope.startScope();
    var tryBlock = errScope.startTry();
    tryBlock.dispose();
    var catchBlock = errScope.startCatch();
    var lci = new SP.ListCreationInformation();
    lci.set_title(listName);
    lci.set_templateType(template);
    lci.set_description(desc);
    var list = cctx.get_web().get_lists().add(lci);
    catchBlock.dispose();
    var finallyBlock = errScope.startFinally();
    cctx.load(list);
    finallyBlock.dispose();
    scopeStart.dispose();
    cctx.executeQueryAsync(function () {
        if (errScope.get_hasException()) {
            console.log("List '" + listName + "' did not exist on the server and was created");
        }
        else {
            console.log("List '" + listName + "' retrieved");
        }
    }, onErr);
}
function loadWebProps() {
    debugger;
    var ctxCurrent = SP.ClientContext.get_current();
    var web = ctxCurrent.get_web();
    ctxCurrent.load(web);
    ctxCurrent.executeQueryAsync(function () {
        //console.log("Web Title: " + web.title); // -> gives undfined
        console.log("Web Title: " + web.get_title());
        console.log("Created: " + web.get_created());
    }, onErr);
}
function loadSiteOwner() {
    debugger;
    var ctxCurrent = SP.ClientContext.get_current();
    var site = ctxCurrent.get_site();
    var owner = site.get_owner();
    ctxCurrent.load(site);
    //ctxCurrent.load(owner); -> Loads full object
    ctxCurrent.load(owner, 'LoginName'); // -> Loads only the Login Name of the object
    ctxCurrent.executeQueryAsync(function () {
        console.log("Site URL: ", site.get_serverRelativeUrl());
        console.log("Owner Login: ", owner.get_loginName());
        console.log("Mail: " + owner.get_email()); //might not be initialized
    }, onErr);
}
function ReadPropsOfWeb() {
    debugger;
    var clientContext = SP.ClientContext.get_current();
    var web = clientContext.get_web();
    clientContext.load(web);
    clientContext.executeQueryAsync(function () {
        console.log('Title: ' + web.get_title() + ' Description: ' + web.get_description());
    }, onErr);
}
function getWebTemplates() {
    debugger;
    var clientContext = SP.ClientContext.get_current();
    var web = clientContext.get_web();
    var templates = web.getAvailableWebTemplates(1033, true);
    clientContext.load(web);
    clientContext.load(templates);
    clientContext.executeQueryAsync(function () {
        var enumerator = templates.getEnumerator();
        while (enumerator.moveNext()) {
            var template = enumerator.get_current();
            console.log('Title: ' + template.get_title() + ' Name: ' + template.get_name());
        }
    }, onErr);
}
function UpdateWebProps() {
    debugger;
    var clientContext = SP.ClientContext.get_current();
    var web = clientContext.get_web();
    web.set_title('Updated Web Site');
    web.set_description('This is an updated Web site.');
    web.update();
    clientContext.load(web, 'Title', 'Description');
    clientContext.executeQueryAsync(function () { console.log('Title: ' + web.get_title() + ' Description: ' + web.get_description()); }, onErr);
}
function createWebsite() {
    debugger;
    var clientContext = SP.ClientContext.get_current();
    var web = clientContext.get_web();
    var wci = new SP.WebCreationInformation();
    wci.set_title('JSOM Web Site');
    wci.set_url('jsomweb');
    wci.set_description('Description of new Web site...');
    wci.set_language(1033);
    wci.set_useSamePermissionsAsParentSite(true);
    wci.set_webTemplate('STS#0');
    web.get_webs().add(wci);
    web.update();
    clientContext.executeQueryAsync(function () { console.log("JSOM Web created"); }, onErr);
}
function writeToPropertyBag() {
    debugger;
    var key = "myConfig";
    //Farm, Site, Web, ListItem have properties -> key / val dictionary
    var clientContext = SP.ClientContext.get_current();
    var web = clientContext.get_web();
    //List has not props, but SPFolder -> RootFolder has
    //var listRootFldProps = web.get_lists().getByTitle('mylist').get_rootFolder().get_allProperties();
    //listRootFldProps.set_item("myConfig", JSON.stringify({ 'Name': 'xyz', 'Value': 123 })
    web.get_allProperties().set_item(key, JSON.stringify({ 'Name': 'xyz', 'Value': 123 }));
    web.update();
    clientContext.load(web);
    clientContext.executeQueryAsync(function () {
        var val = web.get_allProperties().get_item(key);
        console.log("Current value of myCustomObject: ", val);
    }, onErr);
}
function deleteWeb() {
    debugger;
    var clientContext = SP.ClientContext.get_current();
    var site = clientContext.get_site();
    var web = site.openWeb("/jsomweb");
    web.deleteObject();
    clientContext.load(site);
    clientContext.load(web);
    clientContext.executeQueryAsync(function () {
        console.log("Web deleted");
    }, onErr);
}
function listWebs() {
    debugger;
    var clientContext = SP.ClientContext.get_current();
    var webs = clientContext.get_web().get_webs();
    clientContext.load(webs);
    clientContext.executeQueryAsync(function () {
        var enumerator = webs.getEnumerator();
        while (enumerator.moveNext()) {
            var w = enumerator.get_current();
            console.log('Title: ' + w.get_title() + " URL:" + w.get_serverRelativeUrl());
        }
    }, onErr);
}
var listName = "News";
function createList() {
    debugger;
    var cctx = SP.ClientContext.get_current();
    var web = cctx.get_web();
    var listCreationInfo = new SP.ListCreationInformation();
    listCreationInfo.set_title(listName);
    listCreationInfo.set_templateType(SP.ListTemplateType.announcements);
    var list = web.get_lists().add(listCreationInfo);
    cctx.load(list);
    cctx.executeQueryAsync(function () { console.log("Create list done"); }, onErr);
}
function createWriters() {
    debugger;
    var cctx = SP.ClientContext.get_current();
    var web = cctx.get_web();
    var listCreationInfo = new SP.ListCreationInformation();
    listCreationInfo.set_title("Writers");
    listCreationInfo.set_templateType(SP.ListTemplateType.genericList);
    var list = web.get_lists().add(listCreationInfo);
    cctx.load(list);
    cctx.executeQueryAsync(function () { console.log("Create list done"); }, onErr);
}
function updateList() {
    debugger;
    var cctx = SP.ClientContext.get_current();
    var list = cctx.get_web().get_lists().getByTitle(listName);
    list.set_description("The very cool Announcments list");
    list.update();
    cctx.load(list);
    cctx.executeQueryAsync(function () { console.log("Update list done"); }, onErr);
}
function addFieldToList() {
    debugger;
    var clientContext = SP.ClientContext.get_current();
    var list = clientContext.get_web().get_lists().getByTitle(listName);
    var fld = list.get_fields().addFieldAsXml('<Field DisplayName=\'Posts\' Type=\'Number\' />', true, SP.AddFieldOptions.defaultValue);
    var fieldNumber = clientContext.castTo(fld, SP.FieldNumber);
    fieldNumber.set_maximumValue(100);
    fieldNumber.set_minimumValue(35);
    fieldNumber.update();
    clientContext.load(fld);
    clientContext.executeQueryAsync(function () { console.log("Add field to list done"); }, onErr);
}
function deleteList() {
    debugger;
    var clientContext = SP.ClientContext.get_current();
    var web = clientContext.get_web();
    var list = web.get_lists().getByTitle(listName);
    list.deleteObject();
    clientContext.executeQueryAsync(function () { console.log("Delete list done"); }, onErr);
}
var itemId;
function createListItem() {
    debugger;
    var clientContext = new SP.ClientContext();
    var list = clientContext.get_web().get_lists().getByTitle(listName);
    var itemCreateInfo = new SP.ListItemCreationInformation();
    var li = list.addItem(itemCreateInfo);
    li.set_item('Title', 'My post in the news list');
    li.set_item('Body', 'Hello World!');
    li.update();
    clientContext.load(li);
    clientContext.executeQueryAsync(function () {
        itemId = li.get_id();
        console.log('Item created: ' + itemId);
    }, onErr);
}
function readListItem() {
    debugger;
    itemId = 1;
    var query = "<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>" + itemId + "</Value></Eq></Where></Query></View>";
    var clientContext = new SP.ClientContext();
    var list = clientContext.get_web().get_lists().getByTitle(listName);
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(query);
    var collListItem = list.getItems(camlQuery);
    clientContext.load(collListItem, 'Include(DisplayName, HasUniqueRoleAssignments)');
    clientContext.executeQueryAsync(function () {
        var liInfo = '';
        var listItemEnumerator = collListItem.getEnumerator();
        while (listItemEnumerator.moveNext()) {
            var li = listItemEnumerator.get_current();
            liInfo += 'Title: ' + li.get_displayName() +
                'Unique role assignments: ' +
                li.get_hasUniqueRoleAssignments();
        }
        console.log(liInfo.toString());
    }, onErr);
}
function updateListItem() {
    debugger;
    if (itemId != null) {
        var clientContext = new SP.ClientContext();
        var list = clientContext.get_web().get_lists().getByTitle(listName);
        var li = list.getItemById(itemId);
        li.set_item('Title', 'My Updated Title');
        li.update();
        clientContext.executeQueryAsync(function () {
            console.log("ListItem updated");
        }, onErr);
    }
}
function deleteListItem() {
    debugger;
    if (itemId != null) {
        var clientContext = new SP.ClientContext();
        var list = clientContext.get_web().get_lists().getByTitle(listName);
        var li = list.getItemById(itemId);
        li.deleteObject();
        clientContext.executeQueryAsync(function () {
            console.log("item deleted");
        }, onErr);
    }
}
function handlingLookups() {
    debugger;
    var cctx = SP.ClientContext.get_current();
    var web = cctx.get_web();
    var lists = web.get_lists();
    var listNews = lists.getByTitle(listName);
    var firstNews = listNews.getItemById(1);
    cctx.load(firstNews);
    cctx.executeQueryAsync(function () {
        var lookupField = firstNews.get_item("Writer");
        var lookupTitle = lookupField.get_lookupValue();
        console.log("title of lookup field is " + lookupTitle);
    }, onErr);
}
function handlingMM() {
    debugger;
    var cctx = SP.ClientContext.get_current();
    var web = cctx.get_web();
    var lists = web.get_lists();
    var listNews = lists.getByTitle(listName);
    var firstNews = listNews.getItemById(1);
    cctx.load(firstNews);
    cctx.executeQueryAsync(function () {
        var mmField = firstNews.get_item("Topic");
        console.log("title of Managed Metadata field is " + mmField.Label);
    }, onErr);
}
function createSiteCol() {
    debugger;
    var cctx = SP.ClientContext.get_current();
    var web = cctx.get_web();
    var flds = web.get_fields();
    flds.addFieldAsXml("<Field DisplayName='EmployeeName' Name='EmployeeName' ID='{2d9c2efe-58f2-4003-85ce-0251eb174096}' Group='SmartPortal' Type='Text' />", false, SP.AddFieldOptions.addFieldCheckDisplayName);
    cctx.executeQueryAsync(function () {
        console.log("Site Col created");
    }, onErr);
}
var ctID;
function createContentType() {
    debugger;
    var cctx = SP.ClientContext.get_current();
    var web = cctx.get_web();
    var contentTypes = web.get_contentTypes();
    //Get Document Content type by its Id. We will use Document Content Type as Base Content Type  
    var parentCT = contentTypes.getById("0x0101");
    //Creating new Content Type  
    var ctci = new SP.ContentTypeCreationInformation();
    ctci.set_name('PartnerCompany');
    ctci.set_group('SmartPortal');
    ctci.set_description('Content Type for partner companies');
    ctci.set_parentContentType(parentCT);
    var ct = contentTypes.add(ctci);
    cctx.load(ct);
    cctx.executeQueryAsync(function () {
        ctID = ct.get_id();
        console.log('Content type created successfully on Host Web.' + ctID);
    }, onErr);
}
function addSCtoCT() {
    debugger;
    var cctx = SP.ClientContext.get_current();
    var web = cctx.get_web();
    var sc = web.get_fields().getByInternalNameOrTitle("EmployeeName");
    var ct = web.get_contentTypes().getById(ctID);
    if (ct != null) {
        var fieldLink = new SP.FieldLinkCreationInformation();
        fieldLink.set_field(sc);
        ct.get_fieldLinks().add(fieldLink);
        ct.update(true);
        cctx.load(ct);
        cctx.executeQueryAsync(function () {
            console.log('Site Col added to ct');
        }, onErr);
    }
}
function assignContentType() {
    debugger;
    var cctx = SP.ClientContext.get_current();
    var web = cctx.get_web();
    var list = web.get_lists().getByTitle("Documents");
    list.set_contentTypesEnabled(true);
    var ct = web.get_contentTypes().getById('0x010100CC17627A305E9C4D88583357736EC1C2');
    list.get_contentTypes().addExistingContentType(ct);
    list.update();
    cctx.executeQueryAsync(function () {
        console.log('ct bound to list');
    }, onErr);
}
function uploadFile() {
    debugger;
    var cctx = SP.ClientContext.get_current();
    var web = cctx.get_web();
    var list = web.get_lists().getByTitle("Documents");
    var fci = new SP.FileCreationInformation();
    fci.set_url("demofile.txt");
    fci.set_content(new SP.Base64EncodedByteArray());
    var fileContent = "The content of my new file";
    for (var i = 0; i < fileContent.length; i++) {
        fci.get_content().append(fileContent.charCodeAt(i));
    }
    var newFile = list.get_rootFolder().get_files().add(fci);
    cctx.load(newFile);
    cctx.executeQueryAsync(function () {
        console.log('file uploaded');
    }, onErr);
}
function prepareTermStore() {
    debugger;
    var scriptbase = _spPageContextInfo.webAbsoluteUrl + "/_layouts/15/";
    $.getScript(scriptbase + "sp.taxonomy.js", function () {
        var tgName = "Training";
        var arrTerms = ["Office 365", "Angular", "SPFx", "ASP.NET Core", "MS Graph", "TypeScript"];
        var cctx = SP.ClientContext.get_current();
        var taxsession = SP.Taxonomy.TaxonomySession.getTaxonomySession(cctx);
        var termStore = taxsession.getDefaultSiteCollectionTermStore();
        var grps = termStore.get_groups();
        cctx.load(grps);
        cctx.executeQueryAsync(function () {
            var tgTraining = null;
            var tgs = grps.getEnumerator();
            while (tgs.moveNext()) {
                var tg = tgs.get_current();
                var name = tg.get_name();
                console.log(name);
                if (name === tgName) {
                    tgTraining = tg;
                }
            }
            if (tgTraining == null) {
                tgTraining = termStore.createGroup(tgName, SP.Guid.newGuid());
                var topics = tgTraining.createTermSet("Topics", SP.Guid.newGuid().toString(), 1033);
                arrTerms.forEach(function (t) {
                    topics.createTerm(t, 1033, SP.Guid.newGuid().toString());
                });
            }
            cctx.load(tgTraining);
            cctx.executeQueryAsync(function () {
            }, onErr);
        }, onErr);
    });
}
//# sourceMappingURL=usingJSOM.js.map