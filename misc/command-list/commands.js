const commands = [
    {
        name: "help, h",
        args: "command name",
        desc: "Provides a more thorough explanation on the usage of a specific command. Using it without a command name will list all commands.",
        perms: " ",
        category: "staff"
    }, {
        name: "mlid",
        args: "user",
        desc: "Searches a user's modlog and displays non-punishment moderation actions taken against the provided user (e.g. Giveaway wins).",
        perms: "%",
        category: "staff"
    }, {
        name: "plid",
        args: "user",
        desc: "Searches a user's punishment log and displays punishment moderation actions taken against the provided user.",
        perms: "%",
        category: "staff"
    }, {
        name: "showpunishments",
        args: "user",
        desc: "Shows any currently active punishments a user has received and the remaining time left to serve.",
        perms: "%",
        category: "staff"
    }, {
        name: "modnote",
        args: "user, note",
        desc: "Used to put a note in a users modlog, you can modnote anything you consider to be useful information no matter how small. It is encouraged to modnote after a verbal warning has been given or if a user is being particularly shady.",
        perms: "%",
        category: "staff"
    }, {
        name: "modchat",
        args: "rank",
        desc: "Typically set to autoconfirmed, this command makes it so that only users of a particular rank (or higher) can talk. You may wish to change this so only staff can speak when there is an important announcement to make (e.g <code>/modchat %</code>).",
        perms: "%",
        category: "staff"
    }, {
        name: "hidelines",
        args: "user, number of lines, reason",
        desc: "Hides a <span class=fw-bold>specific number of lines</span> that a user has posted, lines remain viewable when the notification is clicked.",
        perms: "%",
        category: "staff"
    }, {
        name: "hidetext",
        args: "user, reason",
        desc: "Hides <span class=fw-bold>every line</span> from a specific user, lines remain viewable when the notification is clicked.",
        perms: "%",
        category: "staff"
    }, {
        name: "clearlines",
        args: "user, number of lines, reason",
        desc: "Deletes a <span class=fw-bold>specific number of lines</span> posted by a user, making them invisible to everyone that is not a staff member.",
        perms: "%",
        category: "staff"
    }, {
        name: "cleartext",
        args: "user, reason",
        desc: "Deletes <span class=fw-bold>every line</span> posted by a user, making them invisible to everyone that is not a staff member.",
        perms: "%",
        category: "staff"
    }, {
        name: "repeat",
        args: "minutes, id, phrase",
        desc: "Repeats a message every x minutes, useful for advertising events or public service announcements.",
        perms: "%",
        category: "staff"
    }, {
        name: "repeatfaqbymessages",
        args: "messages, id, phrase",
        desc: "Repeats a message every x messages in chat, useful for advertising events or public service announcements.",
        perms: "%",
        category: "staff"
    }, {
        name: "removerepeat",
        args: "id",
        desc: "Removes the repeat with a specified ID, do this when the repeat is no longer relevant.",
        perms: "%",
        category: "staff"
    }, {
        name: "warn, k, kick",
        args: "user, reason",
        desc: "Typically used to escalate from a verbal warning. Effectively a bonk on the head of a user to get them to stop what they are doing. Can also be used instead of a verbal warning if you wish to quickly get your point across.",
        perms: "%",
        category: "staff"
    }, {
        name: "mute, m",
        args: "user, reason",
        desc: "Prevents a user from talking in the chat for <span class=fw-bold>seven minutes</span>, mostly used as a minor punishment for room infractions like spam or being a general nuisance.",
        perms: "%",
        category: "staff"
    }, {
        name: "hourmute, hm",
        args: "user, reason",
        desc: "Prevents a user from talking in the chat for <span class=fw-bold>one hour</span>, typically used to escalate a basic mute if a user continues to misbehave. If you are a driver and you are using hourmute in place of a ban, post the punishment in #moderation and request a roomban.",
        perms: "%",
        category: "staff"
    }, {
        name: "roomban, rb",
        args: "user, reason",
        desc: "Bans a user from entering the room for <span class=fw-bold>two days</span>, used in cases where a mute is too light of a punishment (e.g trading hacked Pokémon or heavy trolling).",
        perms: "@",
        category: "staff"
    }, {
        name: "weekban, wb",
        args: "user, reason",
        desc: "Prevents a user from entering the room for <span class=fw-bold>seven days</span>, used in cases where a roomban is too light of a punishment (e.g user did not learn from a previous roomban).",
        perms: "@",
        category: "staff"
    }, {
        name: "blacklist, bl",
        args: "user, reason",
        desc: "Prevents a user from entering the room for <span class=fw-bold>one year</span>, reserved for users with particularly terrible behaviour. Blacklists are typically voted on in #moderation with the exception of cases like trading hacked Pokémon, in which case a vote is not required.<br />Blacklists can also be done by name or extended to <span class=fw-bold>ten years</span> if needed using the <code>/permablacklist</code> command (typically reserved for scammers).",
        perms: "#",
        category: "staff"
    }, {
        name: "giveaway ban",
        args: "user",
        desc: "Bans a user from entering giveaways for <span class=fw-bold>seven days</span>, apply giveaway bans when a user breaks the <a href=/rules/giveaway-rules/>Giveaway Rules</a>. Can be revoked with <code>/giveaway unban [user]</code> in case of error.",
        perms: "%",
        category: "staff"
    }, {
        name: "linecount",
        args: "room (wifi), month, user",
        desc: "Displays the number of lines the given user has had in the room in current/previous months, helpful for showcasing room activity.<br />Month should be formatted as YYYY-MM, to get user <span class=\"lego fw-bold\">Lego</span>'s linecounts for January 2026 you would use <code>/linecount wifi, 2026-01, Lego</code>.",
        perms: " ",
        category: "nomination"
    }, {
        name: "topusers",
        args: "",
        desc: "Displays the 100 most active users in the room, can be useful when checking over users who may deserve a nomination.",
        perms: " ",
        category: "nomination"
    }, {
        name: "roomlogs",
        args: "",
        desc: "Opens the day-by-day logs of the main Wi-Fi chatroom, here you can select an exact month and day and use Ctrl+F to search for logs from a specific user, helpful when building a supporting case for a nomination.",
        perms: "%",
        category: "nomination"
    }, {
        name: "chatlogs",
        args: "word or phrase",
        desc: "Search through the chatroom logs for the specified word or phrase.",
        perms: "%",
        category: "nomination"
    }, {
        name: "roomevents help",
        args: "",
        desc: "Brings up a help list of all the commands relevant for roomevents if you need a more thorough explanation of how adding and removing roomevents work.",
        perms: "%",
        category: "events"
    }, {
        name: "roomevents add",
        args: "event name | date | description",
        desc: "Adds a roomevent to the event box that can be displayed using <code>!events</code>. Date should be formatted as YYYY-MM-DD HH:MM in GMT.",
        perms: "%",
        category: "events"
    }, {
        name: "roomevents start",
        args: "event name",
        desc: "Declares that a roomevent has been started. This command is to only be used by event leaders and should not be abused.",
        perms: "%",
        category: "events"
    }, {
        name: "roomevents remove",
        args: "event name",
        desc: "Removes a room event. Do this whenever an event has come to an end, inform the relevant leadership of your plans before doing so.",
        perms: "%",
        category: "events"
    }, {
        name: "giveaway end",
        args: "",
        desc: "Ends the currently active giveaway in the room.",
        perms: "%",
        category: "events"
    },
];