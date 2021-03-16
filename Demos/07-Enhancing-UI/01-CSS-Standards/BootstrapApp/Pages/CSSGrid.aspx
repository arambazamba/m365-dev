<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <style type="text/css">
        .wrapper{
            display:grid;
            /* grid-template-columns:1fr 1fr 1fr;*/
            grid-template-columns:repeat(3, 1fr);
            grid-gap:1em;
            /* grid-auto-rows:100px; */
            grid-auto-rows: minmax(100px, max-content);
        }

        .nested{
            display:grid;
            grid-template-columns:repeat(3, 1fr);
            grid-auto-rows: 70px;
            grid-gap:1em;
        }

        .wrapper > div{
            background:#eee;
            padding:1em;
        }
        .wrapper > div:nth-child(odd){
            background:#ddd;
        }

        .nested > div{
            border:#333 1px solid;
            padding:1em;
        }
    </style>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="full" Title="loc:full" />
    <div class="wrapper">
        <div>
            Lorem ipsum dolor sit.
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam libero excepturi cupiditate quasi sit. Iure totam a magni, veritatis, voluptatem voluptates tempora praesentium et nisi eligendi. A saepe eaque aliquam, earum nihil quia? Nemo delectus possimus, explicabo repudiandae recusandae. Mollitia!
        </div>
        <div class="nested">
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
            <div>Lorem</div>
        </div>
        <div>
            Lorem ipsum dolor sit.
        </div>
        <div>
            Lorem ipsum dolor sit.
        </div>
        <div>
            Lorem ipsum dolor sit.
        </div>
        <div>
            Lorem ipsum dolor sit.
        </div>
    </div>
</asp:Content>
