function getStringFromBuffer(data) {
  var res = "";
  for (var i = 0; i < 26; i += 2) {
    var char = data.getUint16(i, true);
    if (char == 0) break;
    res += String.fromCharCode(char);
  }
  return res;
}

function copyContent() {
  var el = this;
  el.setAttribute("title", "Copied to clipboard!");
  var val = el.dataset.copyValue;
  navigator.clipboard.writeText(val);
  var tip = new bootstrap.Tooltip(el);
  tip.enable();
  tip.show();
  setTimeout(function () {
    el.setAttribute("title", "");
    tip.hide();
    tip.disable();
  }, 1500);
}

function generateCopyAllButton() {
  var el = document.createElement("div");
  el.classList.add("btn", "btn-success", "w-100");
  el.textContent = "Copy all";

  var data = [];
  var all = document.getElementsByClassName("copy-button");

  for (var i = 0; i < all.length; i++) {
    data.push(all[i].dataset.copyValue);
  }

  el.setAttribute("data-copy-value", data.join("\r\n"));

  document.getElementById("results-container").appendChild(el);
  el.addEventListener("click", copyContent);
}

function roman(num) {
  if (num < 1) {
    return "";
  }
  if (num >= 40) {
    return "XL" + roman(num - 40);
  }
  if (num >= 10) {
    return "X" + roman(num - 10);
  }
  if (num >= 9) {
    return "IX" + roman(num - 9);
  }
  if (num >= 5) {
    return "V" + roman(num - 5);
  }
  if (num >= 4) {
    return "IV" + roman(num - 4);
  }
  if (num >= 1) {
    return "I" + roman(num - 1);
  }
}
