import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("btnRun").onclick = getAttachments;
    document.getElementById("btnSave").onclick = saveToAzure;
  }
});

export async function getAttachments() {
  // Get a reference to the current message
  var item = Office.context.mailbox.item;
  var html = "<div>";

  item.attachments.forEach(at => {
    html += `<div><input type="checkbox" name="${at.id}">${at.name}</div>`;
  });

  html += "</div>";

  // Write message property value to the task pane
  document.getElementById("item-subject").innerHTML = html;
}

export function saveToAzure() {
  const checks = document.querySelectorAll("input[type='checkbox']");

  checks.forEach(chk => {
    if (chk.checked) {
      let item = Office.context.mailbox.item.attachments.find(i => i.id == chk.name);
      console.log("saving to azure", item);
    }
  });

  //To finish this sample follow the stept documented here:
  //https://github.com/OfficeDev/office-js-helpers
}
