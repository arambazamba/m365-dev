<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="JSOMBasics.aspx.cs" Inherits="JSOMBasics.Layouts.JSOMBasics.JSOMBasics" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink ID="jquery" Name="jquery-2.1.4.min.js" runat="server" >
    </SharePoint:ScriptLink>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
     <SharePoint:ScriptLink ID="static" Name="JSOMBasics/JSOMBasics.aspx.js" Localizable="False" runat="server" >
    </SharePoint:ScriptLink>
    <SharePoint:ScriptLink ID="ondemand" Name="ondemand.js" runat="server" OnDemand="True">
    </SharePoint:ScriptLink>
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <a href="#" onclick="loadScript('ondemand.js')">Load Script</a> <br/>
    <a href="#" onclick="usingClientContect()">Using Client Context</a><br/>
    <a href="#" onclick="Batching()">Batching</a><br/>
    <a href="#" onclick="loadWebProps()">Load Web Props</a><br/>
    <a href="#" onclick="loadSiteOwner()">Load Site owner</a><br/>
    <a href="#" onclick="exceptionHandling()">Exception Handling</a><br/>
    <a href="#" onclick="UpdateWebProps()" style="cursor: pointer">Update Web Props</a><br/>
    <a href="#" onclick="getWebTemplates()" style="cursor: pointer">Get Web Templates</a><br/>
    <a href="#" onclick="createWebsite()" style="cursor: pointer">Create Web</a> <br/>
    <a href="#" onclick="writeToPropertyBag()" style="cursor: pointer">Write to Property Bag</a> <br/>
    <a href="#" onclick="listWebs()" style="cursor: pointer">List Webs</a><br/>
    <a href="#" onclick="deleteWeb()" style="cursor: pointer">Delete Web</a><br/>
    <a href="#" onclick="createList()" style="cursor: pointer">Create List</a><br/>
    <a href="#" onclick="createWriters()" style="cursor: pointer">Create Writers</a><br/>
    <a href="#" onclick="updateList()" style="cursor: pointer">Update List</a><br/>
    <a href="#" onclick="addFieldToList()" style="cursor: pointer">Add Field to List</a><br/>
    <a href="#" onclick="deleteList()" style="cursor: pointer">Delete List</a><br/>
    <a href="#" onclick="createListItem()" style="cursor: pointer">Create</a><br/>
    <a href="#" onclick="readListItem()" style="cursor: pointer">Read</a><br/>
    <a href="#" onclick="updateListItem()" style="cursor: pointer">Update</a><br/>
    <a href="#" onclick="deleteListItem()" style="cursor: pointer">Delete</a><br/>
    <a href="#" onclick="uploadFile()" style="cursor: pointer">Upload File</a><br/>    
    <a href="#" onclick="createSiteCol()" style="cursor: pointer">Create Site Col</a><br/>
    <a href="#" onclick="createContentType()" style="cursor: pointer">Create Content Type</a><br/>
    <a href="#" onclick="addSCtoCT()" style="cursor: pointer">Add Site Col to Content Type</a><br/>
    <a href="#" onclick="assignContentType()" style="cursor: pointer">Assign Content Type to list</a><br/>    
    <a href="#" onclick="handlingLookups()" style="cursor: pointer">Handling Lookups</a><br/>
    <a href="#" onclick="prepareTermStore()" style="cursor: pointer">Prepare Termstore</a><br/>    
    <a href="#" onclick="handlingMM()" style="cursor: pointer">Handling Managed Metadata</a><br/>    


</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
JSOM Basics
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
JSOM Basics
</asp:Content>
