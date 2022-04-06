# Client Side Object Model (CSOM)

[The Client Side Object Model (CSOM) API for .NET.](<https://docs.microsoft.com/en-us/previous-versions/office/sharepoint-csom/jj193041(v=office.15)>)

[JSOM API RReference](<https://docs.microsoft.com/en-us/previous-versions/office/sharepoint-visio/jj193034(v=office.15)>)

[Common CSOM Tasks](<https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/ee537013(v=office.14)>)

[Using CSOM for .NET Standard instead of CSOM for .NET Framework](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/using-csom-for-dotnet-standard)

## PnP Sites Core

> Note: Extends in C#

[PnP Sites Core](https://github.com/SharePoint/PnP-Sites-Core)

[PnP Sites Core Documentation](https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/README.md)

## .NET Core MSAL Sample

Init Secrets Manager:

```
dotnet user-secrets init
```

> Note: You might have to remove the current secret:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.1</TargetFramework>
    <RootNamespace>CSOM_Core_Console</RootNamespace>
    <UserSecretsId>af8ab3ee-20ae-4fb1-b5aa-11692902b199</UserSecretsId>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.Identity.Client" Version="4.21.1" />
  </ItemGroup>
</Project>
```

Set your Secret from App Registration:

```
dotnet user-secrets set "MSALSecret" "5SdcrQIXXRV60~e_7kjN_q-6U_p5KB4Oxx_"
```

> Note: You can list your secrets using `dotnet user-secrets list`. Read more on [Secreats Management](https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-3.1&tabs=windows)
