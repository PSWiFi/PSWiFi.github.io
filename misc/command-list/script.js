var container = document.getElementById("command-table-body");

function generateElements() {
    var els = [];
    for (var i = 0; i < commands.length; i++) {
        var command = commands[i];

        var tr = generateCommand(command);

        els.push(tr);
    }

    return els;
}

function generateCommand(command) {
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
    
    return tr;
}

function populateAllOptions() {
    var els = generateElements();
    for (var e of els) container.appendChild(e);
}

function clearOptions() {
    while (container.lastChild) container.removeChild(container.lastChild);
}

$().ready(() => {
    populateAllOptions();
})

$("#command-search").keyup(() => {
    var terms = $("#command-search").val();

    if (terms.length === 0) {
        populateAllOptions();
    } else {
        terms = terms.toLowerCase().replace(/\//g, "").split(" ");
        var scores = {};
        var highest = -1;
        
        for (var i = 0; i < commands.length; i++) {
            var score = 0;
            var index = i;
            var command = commands[i];

            for (var j = 0; j < terms.length; j++) {
                var term = terms[j];

                var names = command.name.split(",")
                for (var k = 0; k < names.length; k++) {
                    var name = names[k].toLowerCase().trim();
                    if (name === term) score += 50;
                    else if (name.includes(term)) score += 7;
                }

                var desc = command.desc.split(" ");
                for (var k = 0; k < desc.length; k++) {
                    var word = desc[k].toLowerCase().trim();
                    if (word.includes(term)) score += 1;
                }

                if (command.category.toLowerCase().includes(term)) score += 20;

            }
            if (score > highest) highest = score;
            scores[index] = score;
        }

        console.log(scores);

        var candidates = [];

        var vals = Object.values(scores);

        for (var sc = highest; sc > 0; sc--) {
            for (var i = 0; i < vals.length; i++) {
                if (vals[i] !== sc) continue;
                candidates.push(generateCommand(commands[i]));
            }
        }

        clearOptions();

        for (var i = 0; i < candidates.length; i++) {
            var tr = candidates[i];
            container.appendChild(tr);
        }           
    }
});

