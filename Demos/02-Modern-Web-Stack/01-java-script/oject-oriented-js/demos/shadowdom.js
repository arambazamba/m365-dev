//# sourceURL=shadowdom.js

function createShowDOM() {
  var host = document.querySelector("#shadowHost");
  var shadowRoot = host.createShadowRoot();
  var div = document.createElement("div");
  div.textContent = "Can you see me now";
  div.className = "x";
  shadowRoot.appendChild(div);
}

function createShadowDomTwo() {
  var host = document.querySelector("#shadowHostTwo");
  var shadowRoot = host.createShadowRoot();
  shadowRoot.appendChild(document.querySelector("#tmpl").content);
}
