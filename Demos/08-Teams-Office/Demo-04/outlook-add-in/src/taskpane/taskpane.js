import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  // Get a reference to the current message
  var item = Office.context.mailbox.item;
  var html = "<div>";

  item.attachments.forEach(at => {
    html += `<div><input type="checkbox" id="scales" name="scales">  ${at.name}</div>`;
  });

  html += "</div>";

  // Write message property value to the task pane
  document.getElementById("item-subject").innerHTML = html;
}
