function loadDemo(page, tag, loadscript) {
  $.ajax({
    type: "GET",
    url: page,
    contentType: "application/json; charset=utf-8",
    dataType: "text",
    success: function(data) {
      if (data != null) {
        let workbenchInfo =
          "<div id='sampleHeading'><h3>" +
          tag.innerText +
          "</h3><br/>Source: " +
          page +
          "</div>";
        $(".workbench").empty();
        $(".workbench").html(data);
        $(".workbench").prepend(workbenchInfo);

        if (loadscript) {
          console.clear();
          var script = page.substr(0, page.indexOf(".html")) + ".js";
          $.getScript(script, null).then(function() {
            $("#sampleHeading").append("<br>Script: " + script);
          });
        }
      }
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}
