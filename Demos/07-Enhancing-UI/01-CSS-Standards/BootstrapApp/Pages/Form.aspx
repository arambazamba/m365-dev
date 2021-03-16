<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <link href="../Content/bootstrap.css" rel="stylesheet" />
    <script src="../Scripts/lib/jquery-2.2.3.min.js"></script>
    <script src="../Scripts/lib/bootstrap.min.js"></script>
    <script src="../Scripts/lib/jquery.validate.min.js"></script>
    <script src="../Scripts/form.js"></script>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="full" Title="loc:full" />
        <div id="container" style="padding-top: 50px">
    
    <form class="form-horizontal">
        <div class="form-group">
            <label for="fullname" class="col-sm-2 control-label">Name</label>
            <div class="col-sm-8">
                <input type="text" id="fullname" name="fullname" class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label for="password" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-8">
                <input type="password" id="password" name="password" class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label for="comments" class="col-sm-2 control-label">Comments</label>
            <div class="col-sm-8">
                <textarea name="comments" id="comments" class="form-control" rows="5" cols="40"></textarea>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
                <div class="checkbox">
                    <label><input type="checkbox" name="dog" value="dog" />Own a dog</label><!--<br/>-->
                </div>
                <div class="checkbox">
                    <label><input checked="checked" type="checkbox" name="cat" value="cat" />Own a cat</label><!--<br/>-->
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="owned" value="owned" />Owned by a cat</label>
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
                <span><b>Your favorite weather?</b></span><br />

                <div class="radio">
                    <label><input type="radio" name="hot" value="hot" checked="checked" /> hot</label><br />
                </div>
                <div class="radio">
                    <label><input type="radio" name="cold" value="cold" /> cold</label><br />
                </div>
                <div class="radio">
                    <label><input type="radio" name="rainy" value="rainy" /> rainy</label><br />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
                <button type="reset" class="btn btn-primary">Reset</button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

</div>

</asp:Content>
