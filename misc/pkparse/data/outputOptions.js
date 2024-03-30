var OUTPUT_OPTIONS = {
  // More soon uwu
  // Moves, EVs
  // See https://docs.google.com/spreadsheets/d/14ARJEcfeHLAgLmximvjJkE-2iud1xYuFpgSLKJNNwKo/edit?usp=sharing for all required fields

  Special: "",
  "\\t": "Inserts a Tab character (goes to the next column in a spreadsheet).",
  "\\n": "Inserts a Newline character (goes to the next row in a spreadsheet).",

  Meta: "",
  "%gen%": "The current Generation of the *.pkm file as a number.",
  "%gen-roman%": "The current Generation of the *.pkm file as a roman numeral.",
  "%dex%":
    "The National Pok\u{00e9}dex number of the Pok\u{00e9}mon, padded to 4 digits with leading zeroes.",
  "%species%": "Species name of the Pok\u{00e9}mon.",
  "%form%":
    "Appends the form name of the Pok\u{00e9}mon preceeded by a hyphen if it has one, blank if it does not.",
  "%gmax%": '"-Gmax" if the Pok\u{00e9}mon can Gigantamax, blank if it can\'t.',

  Met: "",
  "%origingame%": "The game in which the Pok\u{00e9}mon was met.",
  "%ball%": "Name of the Pok\u{00e9}ball the Pok\u{00e9}mon was caught in.",
  "%ot%": "Name of the Pok\u{00e9}mon's Original Trainer.",
  "%tid%":
    "The Pok\u{00e9}mon's Trainer ID in the format of the game it was caught in, padded with leading zeroes.",
  "%sid%":
    "The Pok\u{00e9}mon's Secret ID in the format of the game it was caught in, padded with leading zeroes.",
  "%tid5%": "5-digit Trainer ID, padded with leading zeroes.",
  "%sid5%": "5-digit Secret ID, padded with leading zeroes.",
  "%tid7%": '6-digit "Display ID", padded with leading zeroes.',
  "%sid7%": '4-digit "Display SID", padded with leading zeroes.',
  "%gender%":
    '"m" if the Pok\u{00e9}mon is Male, "f" if it is Female, "-" if it is Unknown.',
  "%gender-upper%":
    '"M" if the Pok\u{00e9}mon is Male, "F" if it is Female, "-" if it is Unknown.',
  "%gender-symbol%":
    '"♂" if the Pok\u{00e9}mon is Male, "♀" if it is Female, "⚲" if it is Unknown.',

  Info: "",
  "%pid%":
    "The Pok\u{00e9}mon's Personality ID as an 8-digit lowercase hex string.",
  "%pid-upper%":
    "The Pok\u{00e9}mon's Personality ID as an 8-digit uppercase hex string.",
  "%shiny%": '"y" if the Pok\u{00e9}mon is shiny, "n" if it is not.',
  "%shiny-upper%": '"Y" if the Pok\u{00e9}mon is shiny, "N" if it is not.',
  "%shiny-long%": '"yes" if the Pok\u{00e9}mon is shiny, "no" if it is not.',
  "%shiny-long-upper%":
    '"Yes" if the Pok\u{00e9}mon is shiny, "No" if it is not.',
  "%shiny-type-symbol%":
    '"◼" if the Pok\u{00e9}mon is Square Shiny, "★" if it is Star Shiny, or "n" if it is neither.',
  "%shiny-type-symbol-upper%":
    '"◼" if the Pok\u{00e9}mon is Square Shiny, "★" if it is Star Shiny, or "N" if it is neither.',
  "%shiny-type-long%":
    '"square" if the Pok\u{00e9}mon is Square Shiny, "star" if it is Star Shiny, or "no" if it is neither.',
  "%shiny-type-long-upper%":
    '"Square" if the Pok\u{00e9}mon is Square Shiny, "Star" if it is Star Shiny, or "No" if it is neither.',
  "%shiny-type-symbol-long%":
    '"◼" if the Pok\u{00e9}mon is Square Shiny, "★" if it is Star Shiny, or "no" if it is neither.',
  "%shiny-type-symbol-long-upper%":
    '"◼" if the Pok\u{00e9}mon is Square Shiny, "★" if it is Star Shiny, or "No" if it is neither.',
  "%nature%": "Nature the Pok\u{00e9}mon had when it was captured.",
  "%nature-minted%":
    "The Nature currently affecting the Pok\u{00e9}mon's stats (identical to %nature% if prior to Gen 8).",
  "%ability%": "The Pok\u{00e9}mon's Ability.",
  "%abilitynum%":
    'The Pok\u{00e9}mon\'s Ability Number ("1" for Ability 1, "2" for Ability 2, or "h" for Hidden Ability).',
  "%abilitynum-upper%":
    'The Pok\u{00e9}mon\'s Ability Number ("1" for Ability 1, "2" for Ability 2, or "H" for Hidden Ability).',
  "%teratype%": "The Pok\u{00e9}mon's Tera Type (blank prior to Gen 9).",

  Stats: "",
  "%ivhp%":
    "The Pok\u{00e9}mon's HP IV as a number (does not take into account Hyper Training).",
  "%ivhp-judge%":
    "The Pok\u{00e9}mon's HP IV as a shortened version of the Judge evaluation (does not take into account Hyper Training).",
  "%ivhp-ht%":
    'The Pok\u{00e9}mon\'s HP IV as a number, or "HT" if HP is Hyper Trained.',
  "%ivhp-judge-ht%":
    'The Pok\u{00e9}mon\'s HP IV as a shortened version of the Judge evaluation, or "HT" if HP is Hyper Trained.',
  "%ivatk%":
    "The Pok\u{00e9}mon's Attack IV as a number (does not take into account Hyper Training).",
  "%ivatk-judge%":
    "The Pok\u{00e9}mon's Attack IV as a shortened version of the Judge evaluation (does not take into account Hyper Training).",
  "%ivatk-ht%":
    'The Pok\u{00e9}mon\'s Attack IV as a number, or "HT" if Attack is Hyper Trained.',
  "%ivatk-judge-ht%":
    'The Pok\u{00e9}mon\'s Attack IV as a shortened version of the Judge evaluation, or "HT" if Attack is Hyper Trained.',
  "%ivdef%":
    "The Pok\u{00e9}mon's Defense IV as a number (does not take into account Hyper Training).",
  "%ivdef-judge%":
    "The Pok\u{00e9}mon's Defense IV as a shortened version of the Judge evaluation (does not take into account Hyper Training).",
  "%ivdef-ht%":
    'The Pok\u{00e9}mon\'s Defense IV as a number, or "HT" if Defense is Hyper Trained.',
  "%ivdef-judge-ht%":
    'The Pok\u{00e9}mon\'s Defense IV as a shortened version of the Judge evaluation, or "HT" if Defense is Hyper Trained.',
  "%ivspa%":
    "The Pok\u{00e9}mon's Sp. Atk. IV as a number (does not take into account Hyper Training).",
  "%ivspa-judge%":
    "The Pok\u{00e9}mon's Sp. Atk. IV as a shortened version of the Judge evaluation (does not take into account Hyper Training).",
  "%ivspa-ht%":
    'The Pok\u{00e9}mon\'s Sp. Atk. IV as a number, or "HT" if Sp. Atk. is Hyper Trained.',
  "%ivspa-judge-ht%":
    'The Pok\u{00e9}mon\'s Sp. Atk. IV as a shortened version of the Judge evaluation, or "HT" if Sp. Atk. is Hyper Trained.',
  "%ivspd%":
    "The Pok\u{00e9}mon's Sp. Def. IV as a number (does not take into account Hyper Training).",
  "%ivspd-judge%":
    "The Pok\u{00e9}mon's Sp. Def. IV as a shortened version of the Judge evaluation (does not take into account Hyper Training).",
  "%ivspd-ht%":
    'The Pok\u{00e9}mon\'s Sp. Def. IV as a number, or "HT" if Sp. Def. is Hyper Trained.',
  "%ivspd-judge-ht%":
    'The Pok\u{00e9}mon\'s Sp. Def. IV as a shortened version of the Judge evaluation, or "HT" if Sp. Def. is Hyper Trained.',
  "%ivspe%":
    "The Pok\u{00e9}mon's Speed IV as a number (does not take into account Hyper Training).",
  "%ivspe-judge%":
    "The Pok\u{00e9}mon's Speed IV as a shortened version of the Judge evaluation (does not take into account Hyper Training).",
  "%ivspe-ht%":
    'The Pok\u{00e9}mon\'s Speed IV as a number, or "HT" if Speed is Hyper Trained.',
  "%ivspe-judge-ht%":
    'The Pok\u{00e9}mon\'s Speed IV as a shortened version of the Judge evaluation, or "HT" if Speed is Hyper Trained.',
  "%hp-type%":
    "The Type of the move Hidden Power when used by this Pok\u{00e9}mon.",
  "%hp-power%":
    "The Base Power of the move Hidden Power when used by this Pok\u{00e9}mon.",
};
