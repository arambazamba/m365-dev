# SPFx Extensions

[Overview of SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/overview-extensions)

Test a specific extension:

```
gulp serve --config=placeholderSample
```

Take config from `serve.json` and adjust pageUrl: `"https://tenant.sharepoint.com/sites/SITE/SitePages/Home.aspx"`,

```
"placeholderSample": {
    "pageUrl": "https://integrationsonline.sharepoint.com/sites/M365ClientDevFundamentals/SitePages/Home.aspx",
    "customActions": {
    "8c8c1ffa-7cba-4182-96f4-7c7710cab056": {
        "location": "ClientSideExtension.ApplicationCustomizer",
        "properties": {
        "Top": "Top area of the page",
        "Bottom": "Bottom area in the page"
        }
    }
    }
},
"toasterSample": {
    "pageUrl": "https://integrationsonline.sharepoint.com/sites/DevGrp/SitePages/Home.aspx",
    "customActions": {
        "e1176819-fff6-4f05-9f43-505633d23b41": {
            "location": "ClientSideExtension.ApplicationCustomizer",
            "properties": {
                "testMessage": "Test message"
            }
        }
    }
},
```

Choose "Load debug scripts"

![debug](./_images/debug.png)

> For Toaster Sample create Powershell to creat the list and insert at least one item to the list

# Further Material

[SharePoint Framework Extensions Samples & Tutorial Materials](https://github.com/SharePoint/sp-dev-fx-extensions)
