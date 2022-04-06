# Using Azure Functions with SharePoint Webhooks

[SharePoint Webhooks Overview](https://docs.microsoft.com/en-us/sharepoint/dev/apis/webhooks/overview-sharepoint-webhooks#:~:text=SharePoint%20webhooks%20enable%20developers%20to,POST%20payload%20to%20the%20subscriber.&text=Currently%20webhooks%20are%20only%20enabled%20for%20SharePoint%20list%20items.)

![subscribe](_images/webhook-sample-call-webhook.png)

![process](_images/webhook-sample-async-getchanges.png)

## Demo

- 01-AzureFunct: An Azure Function acting as an endpoint for a SharePoint Webhook
- 02-ReferenceImplementation

### 01-AzureFunct

- Create Az-Funct using `create-func-app.azcli`
- Setup Webhook Subscription using `create-wh-subscription.ps1` & manipulate list.
- Watch logs or queue for change

> Note: If you want to complete this sample follow the PNP Webhook sample implementation @https://docs.microsoft.com/en-us/sharepoint/dev/apis/webhooks/webhooks-reference-implementation
