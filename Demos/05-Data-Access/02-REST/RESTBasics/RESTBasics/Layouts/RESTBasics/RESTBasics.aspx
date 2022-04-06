<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RESTBasics.aspx.cs" Inherits="REST_Basics.Layouts.REST_Basics.RESTBasics" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink ID="jquery" Name="RESTBasics/jquery-2.1.4.min.js" runat="server" Localizable="False"/>
    <SharePoint:ScriptLink ID="RESTBasicsSL" Name="RESTBasics/RESTBasics.aspx.js" Localizable="False" runat="server"/>

</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <a href="#" onclick="createList()">Create List</a><br/>
    <a href="#" onclick="updateList()">Update List</a><br/>
    <a href="#" onclick="addField()">Add Field</a><br/>
    <a href="#" onclick="getItems()">Get List Items</a><br/>
    <a href="#" onclick="doExpanding()">Query List with Expanding</a><br/>
    <a href="#" onclick="getUserProps()">Get User Props</a><br/>
    <a href="#" onclick="usingGetItems()">Query List using GetItems CAML Query</a><br/>
    <a href="#" onclick="addListItem()">Add List Item</a><br/>
    <a href="#" onclick="updateListItem()">Update List Item</a><br/>
    <a href="#" onclick="deleteList()">Delete List</a>  <br/>  
    <a href="#" onclick="createSite()">Create Site</a><br/>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
REST Bascics
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
REST Bascics
</asp:Content>
