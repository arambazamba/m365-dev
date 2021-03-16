

$targetSiteUrl = "https://integrationsonline.sharepoint.com/sites/M365ClientDevFundamentals/"
$Credentials = Get-Credential -Message "Enter Admin Credentials"
$FilePath = "./ToastList.xml"

try {
    Connect-PnPOnline $TargetSiteUrl -Credentials $Credentials -ErrorAction Stop

    Apply-PnPProvisioningTemplate -Path $FilePath

    Disconnect-PnPOnline

}
catch {
    Write-Host -ForegroundColor Red "Exception occurred!" 
    Write-Host -ForegroundColor Red "Exception Type: $($_.Exception.GetType().FullName)"
    Write-Host -ForegroundColor Red "Exception Message: $($_.Exception.Message)"
}