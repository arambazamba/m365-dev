# Make sure you have logged in to M365

$siteUrl = "https://integrationsonline.sharepoint.com/sites/M365ClientDevFundamentals"
$appId = m365 spo app add --filePath ./spfx-alm/sharepoint/solution/sp-fx-alm.sppkg --overwrite 
m365 spo app deploy --id $appId --skipFeatureDeployment
m365 spo app install --id $appId --siteUrl $siteUrl