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

function insertThis() {
  var el = this;
  el.setAttribute("title", "Inserted!");
  var content = this.textContent;
  document.getElementById("format").value += content;
  var tip = new bootstrap.Tooltip(el);
  tip.enable();
  tip.show();
  setTimeout(function () {
    el.setAttribute("title", "");
    tip.hide();
    tip.disable();
  }, 1500);
}

var colors = [
  "info",
  "danger",
  "warning",
  "secondary",
  "primary",
  "dark",
  "success",
];

function generateOutputOptions() {
  var parent = document.getElementById("opts-container");
  var keys = Object.keys(OUTPUT_OPTIONS);
  var colorIndex = -1;
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var val = OUTPUT_OPTIONS[k];

    if (!k.startsWith("%") && !k.startsWith("\\")) {
      colorIndex = Math.min(colorIndex + 1, colors.length - 1);
      continue;
    }

    var row = document.createElement("div");
    row.classList.add("row", "mb-3");

    var col1 = document.createElement("div");
    col1.classList.add("col", "col-3");

    var col2 = document.createElement("div");
    col2.classList.add("col", "col-9", "text-center");
    col2.textContent = val;

    var btn = document.createElement("button");
    btn.textContent = k;
    btn.classList.add("btn", "btn-outline-" + colors[colorIndex], "w-100");

    btn.addEventListener("click", insertThis);

    col1.appendChild(btn);

    row.appendChild(col1);
    row.appendChild(col2);

    parent.appendChild(row);
  }
}

var names = [
  "No output preset selected...",
  "[ZA] PS! Wi-Fi Trade Sheet Template",
  "[ZA] PS! Wi-Fi Prizes Sheet - OGA/BR/High Value",
  "[SV] PS! Wi-Fi Trade Sheet Template",
  "[SV] PS! Wi-Fi Hackmons Sheet",
  "[SV] PS! Wi-Fi Prizes Sheet - OGA/BR/High Value",
  "[SV] PS! Wi-Fi Prizes Sheet - Bred Pok\u{00e9}mon",
];
function regenerateDefaults() {
  var parent = document.getElementById("output-preset");
  parent.options.length = 0; // force regen all

  var defaultKeys = Object.keys(OUTPUT_DEFAULTS);
  for (var i = 0; i < defaultKeys.length; i++) {
    parent.options.add(new Option(names[i], defaultKeys[i]));
  }

  var storageKeys = Object.keys(localStorage);
  for (var i = 0; i < storageKeys.length; i++) {
    if (!storageKeys[i].startsWith("pkparse-custom-")) continue;
    parent.options.add(
      new Option(
        storageKeys[i].replace("pkparse-custom-", ""),
        localStorage.getItem(storageKeys[i])
      )
    );
  }
}

function generateCopyAllButton() {
  var el = document.createElement("div");
  el.classList.add("btn", "btn-success", "w-100", "mb-3");
  el.textContent = "Copy all";

  var data = [];
  var all = document.getElementsByClassName("copy-button");

  for (var i = 0; i < all.length; i++) {
    data.push(all[i].dataset.copyValue);
  }

  el.setAttribute("data-copy-value", data.join("\r\n"));

  document.getElementById("results-container").prepend(el);
  el.addEventListener("click", copyContent);
}

var hpIdx = [
  0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5,
  6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11,
  11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15,
];

function calcHPType(iv32) {
  var bin = 0;
  for (var i = 0; i < 6; i++) {
    bin |= (iv32 & 1) << i;
    iv32 >>>= 5;
  }
  var typeIdx = hpIdx[bin];
  return TYPES[typeIdx + 1]; // HP Type can't be Normal so add 1
}

function calcHPPower(iv32) {
  var bin = 0;
  for (var i = 0; i < 6; i++) {
    bin |= (iv32 & 3) > 1 ? 1 << i : 0;
    iv32 >>>= 5;
  }
  return ~~((bin * 40) / 63) + 30;
}

function getTeraType(original, override) {
  if (override <= 17 || override == 99) return TYPES[Math.min(override, 19)];
  return TYPES[Math.min(original, 19)];
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

function toTitleCase(text) {
  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
}
