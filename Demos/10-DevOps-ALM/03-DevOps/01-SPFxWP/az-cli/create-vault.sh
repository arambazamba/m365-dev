rnd=staging
grp=spfx-devops-$rnd
loc=westeurope
vault=spfxvault-$rnd

az group create -n $grp -l $loc

az keyvault create -l $loc -n $vault -g $grp --sku Standard

az keyvault secret set --vault-name $vault --name "username" --value "alexander.pajer@integrations.at"

az keyvault secret set --vault-name $vault --name "password" --value "TiTp4spfx!"

# az keyvault secret show --name "username" --vault-name $vault

# username=$(az keyvault secret show --name "username" --vault-name $vault --query value)

# az keyvault secret list --vault-name $vault

# Delete KV and purge it to permanently delete it
# Do not execute

# az keyvault delete -n $vault

# az keyvault purge -n $vault