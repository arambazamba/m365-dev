Import-Module Microsoft.Online.SharePoint.Powershell
$adminUPN = "alexander.pajer@integrations.at"
$tenant = "integrationsonline"
$userCredential = Get-Credential -UserName $adminUPN -Message "Type the password for $adminUPN"
Connect-SPOService -Url https://$tenant-admin.sharepoint.com -Credential $userCredential


$themepalette = @{
    "themePrimary"         = "#6fb5eb";
    "themeLighterAlt"      = "#f9fcfe";
    "themeLighter"         = "#e6f2fc";
    "themeLight"           = "#d1e8f9";
    "themeTertiary"        = "#a6d1f3";
    "themeSecondary"       = "#7ebded";
    "themeDarkAlt"         = "#63a3d3";
    "themeDark"            = "#5489b2";
    "themeDarker"          = "#3e6583";
    "neutralLighterAlt"    = "#baecd5";
    "neutralLighter"       = "#b7e8d1";
    "neutralLight"         = "#b0dec9";
    "neutralQuaternaryAlt" = "#a4cfbb";
    "neutralQuaternary"    = "#9cc6b2";
    "neutralTertiaryAlt"   = "#96beab";
    "neutralTertiary"      = "#c2c2c2";
    "neutralSecondary"     = "#858585";
    "neutralPrimaryAlt"    = "#4b4b4b";
    "neutralPrimary"       = "#333333";
    "neutralDark"          = "#272727";
    "black"                = "#1d1d1d";
    "white"                = "#bef1d9";
}

Add-SPOTheme -Identity "ETC Theme" -Palette $themepalette -IsInverted $false