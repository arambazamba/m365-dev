$tenant = "integrationsonline"
$adminUrl = "https://$tenant-admin.sharepoint.com"
$hubUrlFragment = "learning"
$hubSiteUrl = "https://$tenant.sharepoint.com/sites/$hubUrlFragment"

$user = "alexander.pajer@integrations.at"

Connect-PnPOnline -Url $adminUrl 

# The designated hub
New-PnPSite -Type TeamSite -title "Learning" -alias "learning" -Description "Main site for learning"

# Register hub

Connect-SPOService -Url $adminUrl

Register-SPOHubSite -Site $hubSiteUrl

Grant-SPOHubSiteRights -Identity $hubSiteUrl -Principals $user -Rights Join

# Add site to be integrated

New-PnPSite -Type TeamSite -title "Sample TS" -alias "samplets" -Description "A site to be integrated in the hub"

Add-SPOHubSiteAssociation -Site https://$tenant.sharepoint.com/sites/samplets -HubSite $hubSiteUrl 