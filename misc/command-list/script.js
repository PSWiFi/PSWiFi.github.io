var container = document.getElementById("command-table-body");

function generateElements() {
    var els = [];
    for (var i = 0; i < commands.length; i++) {
        var command = commands[i];

        var tr = document.createElement("tr");

        var td_usage = document.createElement("th");
        td_usage.setAttribute("scope", "row");
        td_usage.style = "white-space: pre;";
        var usage = formatUsage(command);
        td_usage.innerText = usage;

        var td_alias = document.createElement("td");
        td_alias.classList.add("text-center");
        var alias = formatAlias(command);
        td_alias.innerText = alias;

        var td_rank = document.createElement("td");
        td_rank.classList.add("text-center");
        var rank = command.perms;
        td_rank.innerText = rank;

        var td_desc = document.createElement("td");
        td_desc.innerHTML = command.desc;
        td_desc.style = "white-space: pre;";

        tr.appendChild(td_usage);
        tr.appendChild(td_desc);
        tr.appendChild(td_rank);
        tr.appendChild(td_alias);

        els.push(tr);
    }

    return els;
}

$().ready(() => {
    var els = generateElements();
    for (var e of els) container.appendChild(e);
})

