var FORMS = {
  3: ["Venusaur", "Venusaur-Mega"], // venusaur
  6: ["Charizard", "Charizard-Mega-X", "Charizard-Mega-Y"], // charizard
  9: ["Blastoise", "Blastoise-Mega"], // blastoise
  15: ["Beedrill", "Beedrill-Mega"], // beedrill
  18: ["Pidgeot", "Pidgeot-Mega"], // pidgeot
  19: ["Rattata", "Rattata-Alola"], // rattata
  20: ["Raticate", "Raticate-Alola", "Raticate-Alola-Totem"], // raticate
  25: [
    "Pikachu",
    "Pikachu-Original",
    "Pikachu-Hoenn",
    "Pikachu-Sinnoh",
    "Pikachu-Unova",
    "Pikachu-Kalos",
    "Pikachu-Alola",
    "Pikachu-Partner",
    "Pikachu-Starter",
    "Pikachu-World",
    "Pikachu-Rock-Star",
    "Pikachu-Belle",
    "Pikachu-Pop-Star",
    "Pikachu-PhD",
    "Pikachu-Libre",
    "Pikachu-Cosplay",
  ], // pikachu
  26: ["Raichu", "Raichu-Alola"], // raichu
  27: ["Sandshrew", "Sandshrew-Alola"], // sandshrew
  28: ["Sandslash", "Sandslash-Alola"], // sandslash
  37: ["Vulpix", "Vulpix-Alola"], // vulpix
  38: ["Ninetales", "Ninetales-Alola"], // ninetales
  50: ["Diglett", "Diglett-Alola"], // diglett
  51: ["Dugtrio", "Dugtrio-Alola"], // dugtrio
  52: ["Meowth", "Meowth-Alola", "Meowth-Galar"], // meowth
  53: ["Persian", "Persian-Alola"], // persian
  58: ["Growlithe", "Growlithe-Hisui"], // growlithe
  59: ["Arcanine", "Arcanine-Hisui"], // arcanine
  65: ["Alakazam", "Alakazam-Mega"], // alakazam
  74: ["Geodude", "Geodude-Alola"], // geodude
  75: ["Graveler", "Graveler-Alola"], // graveler
  76: ["Golem", "Golem-Alola"], // golem
  77: ["Ponyta", "Ponyta-Galar"], // ponyta
  78: ["Rapidash", "Rapidash-Galar"], // rapidash
  79: ["Slowpoke", "Slowpoke-Galar"], // slowpoke
  80: ["Slowbro", "Slowbro-Mega", "Slowbro-Galar"], // slowbro
  83: ["Farfetch’d", "Farfetch’d-Galar"], // farfetchd
  88: ["Grimer", "Grimer-Alola"], // grimer
  89: ["Muk", "Muk-Alola"], // muk
  94: ["Gengar", "Gengar-Mega"], // gengar
  100: ["Voltorb", "Voltorb-Hisui"], // voltorb
  101: ["Electrode", "Electrode-Hisui"], // electrode
  103: ["Exeggutor", "Exeggutor-Alola"], // exeggutor
  105: ["Marowak", "Marowak-Alola", "Marowak-Alola-Totem"], // marowak
  110: ["Weezing", "Weezing-Galar"], // weezing
  115: ["Kangaskhan", "Kangaskhan-Mega"], // kangaskhan
  122: ["Mr. Mime", "Mr. Mime-Galar"], // mrmime
  127: ["Pinsir", "Pinsir-Mega"], // pinsir
  128: [
    "Tauros",
    "Tauros-Paldea-Combat",
    "Tauros-Paldea-Blaze",
    "Tauros-Paldea-Aqua",
  ], // tauros
  130: ["Gyarados", "Gyarados-Mega"], // gyarados
  133: ["Eevee", "Eevee-Starter"], // eevee
  142: ["Aerodactyl", "Aerodactyl-Mega"], // aerodactyl
  144: ["Articuno", "Articuno-Galar"], // articuno
  145: ["Zapdos", "Zapdos-Galar"], // zapdos
  146: ["Moltres", "Moltres-Galar"], // moltres
  150: ["Mewtwo", "Mewtwo-Mega-X", "Mewtwo-Mega-Y"], // mewtwo
  157: ["Typhlosion", "Typhlosion-Hisui"], // typhlosion
  172: ["Pichu", "Pichu-Spiky-eared"], // pichu
  181: ["Ampharos", "Ampharos-Mega"], // ampharos
  194: ["Wooper", "Wooper-Paldea"], // wooper
  199: ["Slowking", "Slowking-Galar"], // slowking
  201: [
    "Unown",
    "Unown-B",
    "Unown-C",
    "Unown-D",
    "Unown-E",
    "Unown-F",
    "Unown-G",
    "Unown-H",
    "Unown-I",
    "Unown-J",
    "Unown-K",
    "Unown-L",
    "Unown-M",
    "Unown-N",
    "Unown-O",
    "Unown-P",
    "Unown-Q",
    "Unown-R",
    "Unown-S",
    "Unown-T",
    "Unown-U",
    "Unown-V",
    "Unown-W",
    "Unown-X",
    "Unown-Y",
    "Unown-Z",
    "Unown-Exclamation",
    "Unown-Question",
  ], // unown
  208: ["Steelix", "Steelix-Mega"], // steelix
  211: ["Qwilfish", "Qwilfish-Hisui"], // qwilfish
  212: ["Scizor", "Scizor-Mega"], // scizor
  214: ["Heracross", "Heracross-Mega"], // heracross
  215: ["Sneasel", "Sneasel-Hisui"], // sneasel
  222: ["Corsola", "Corsola-Galar"], // corsola
  229: ["Houndoom", "Houndoom-Mega"], // houndoom
  248: ["Tyranitar", "Tyranitar-Mega"], // tyranitar
  254: ["Sceptile", "Sceptile-Mega"], // sceptile
  257: ["Blaziken", "Blaziken-Mega"], // blaziken
  260: ["Swampert", "Swampert-Mega"], // swampert
  263: ["Zigzagoon", "Zigzagoon-Galar"], // zigzagoon
  264: ["Linoone", "Linoone-Galar"], // linoone
  282: ["Gardevoir", "Gardevoir-Mega"], // gardevoir
  302: ["Sableye", "Sableye-Mega"], // sableye
  303: ["Mawile", "Mawile-Mega"], // mawile
  306: ["Aggron", "Aggron-Mega"], // aggron
  308: ["Medicham", "Medicham-Mega"], // medicham
  310: ["Manectric", "Manectric-Mega"], // manectric
  319: ["Sharpedo", "Sharpedo-Mega"], // sharpedo
  323: ["Camerupt", "Camerupt-Mega"], // camerupt
  334: ["Altaria", "Altaria-Mega"], // altaria
  351: ["Castform", "Castform-Sunny", "Castform-Rainy", "Castform-Snowy"], // castform
  354: ["Banette", "Banette-Mega"], // banette
  359: ["Absol", "Absol-Mega"], // absol
  362: ["Glalie", "Glalie-Mega"], // glalie
  373: ["Salamence", "Salamence-Mega"], // salamence
  376: ["Metagross", "Metagross-Mega"], // metagross
  380: ["Latias", "Latias-Mega"], // latias
  381: ["Latios", "Latios-Mega"], // latios
  382: ["Kyogre", "Kyogre-Primal"], // kyogre
  383: ["Groudon", "Groudon-Primal"], // groudon
  384: ["Rayquaza", "Rayquaza-Mega"], // rayquaza
  386: ["Deoxys", "Deoxys-Attack", "Deoxys-Defense", "Deoxys-Speed"], // deoxys
  412: ["Burmy", "Burmy-Sandy", "Burmy-Trash"], // burmy
  413: ["Wormadam", "Wormadam-Sandy", "Wormadam-Trash"], // wormadam
  421: ["Cherrim", "Cherrim-Sunshine"], // cherrim
  422: ["Shellos", "Shellos-East"], // shellos
  423: ["Gastrodon", "Gastrodon-East"], // gastrodon
  428: ["Lopunny", "Lopunny-Mega"], // lopunny
  445: ["Garchomp", "Garchomp-Mega"], // garchomp
  448: ["Lucario", "Lucario-Mega"], // lucario
  460: ["Abomasnow", "Abomasnow-Mega"], // abomasnow
  475: ["Gallade", "Gallade-Mega"], // gallade
  479: [
    "Rotom",
    "Rotom-Heat",
    "Rotom-Wash",
    "Rotom-Frost",
    "Rotom-Fan",
    "Rotom-Mow",
  ], // rotom
  483: ["Dialga", "Dialga-Origin"], // dialga
  484: ["Palkia", "Palkia-Origin"], // palkia
  487: ["Giratina", "Giratina-Origin"], // giratina
  492: ["Shaymin", "Shaymin-Sky"], // shaymin
  493: [
    "Arceus",
    "Arceus-Fighting",
    "Arceus-Flying",
    "Arceus-Poison",
    "Arceus-Ground",
    "Arceus-Rock",
    "Arceus-Bug",
    "Arceus-Ghost",
    "Arceus-Steel",
    "Arceus-Fire",
    "Arceus-Water",
    "Arceus-Grass",
    "Arceus-Electric",
    "Arceus-Psychic",
    "Arceus-Ice",
    "Arceus-Dragon",
    "Arceus-Dark",
    "Arceus-Fairy",
  ], // arceus
  503: ["Samurott", "Samurott-Hisui"], // samurott
  531: ["Audino", "Audino-Mega"], // audino
  549: ["Lilligant", "Lilligant-Hisui"], // lilligant
  550: ["Basculin", "Basculin-Blue-Striped", "Basculin-White-Striped"], // basculin
  554: ["Darumaka", "Darumaka-Galar"], // darumaka
  555: [
    "Darmanitan",
    "Darmanitan-Zen",
    "Darmanitan-Galar",
    "Darmanitan-Galar-Zen",
  ], // darmanitan
  562: ["Yamask", "Yamask-Galar"], // yamask
  570: ["Zorua", "Zorua-Hisui"], // zorua
  571: ["Zoroark", "Zoroark-Hisui"], // zoroark
  585: ["Deerling", "Deerling-Summer", "Deerling-Autumn", "Deerling-Winter"], // deerling
  586: ["Sawsbuck", "Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter"], // sawsbuck
  618: ["Stunfisk", "Stunfisk-Galar"], // stunfisk
  628: ["Braviary", "Braviary-Hisui"], // braviary
  641: ["Tornadus", "Tornadus-Therian"], // tornadus
  642: ["Thundurus", "Thundurus-Therian"], // thundurus
  645: ["Landorus", "Landorus-Therian"], // landorus
  646: ["Kyurem", "Kyurem-White", "Kyurem-Black"], // kyurem
  647: ["Keldeo", "Keldeo-Resolute"], // keldeo
  648: ["Meloetta", "Meloetta-Pirouette"], // meloetta
  649: [
    "Genesect",
    "Genesect-Douse",
    "Genesect-Shock",
    "Genesect-Burn",
    "Genesect-Chill",
  ], // genesect
  658: ["Greninja", "Greninja-Bond", "Greninja-Ash"], // greninja
  666: [
    "Vivillon-Icy Snow",
    "Vivillon-Polar",
    "Vivillon-Tundra",
    "Vivillon-Continental",
    "Vivillon-Garden",
    "Vivillon-Elegant",
    "Vivillon",
    "Vivillon-Modern",
    "Vivillon-Marine",
    "Vivillon-Archipelago",
    "Vivillon-High Plains",
    "Vivillon-Sandstorm",
    "Vivillon-River",
    "Vivillon-Monsoon",
    "Vivillon-Savanna",
    "Vivillon-Sun",
    "Vivillon-Ocean",
    "Vivillon-Jungle",
    "Vivillon-Fancy",
    "Vivillon-Pokeball",
  ], // vivillon
  669: [
    "Flabébé",
    "Flabébé-Blue",
    "Flabébé-Orange",
    "Flabébé-White",
    "Flabébé-Yellow",
  ], // flabebe
  670: [
    "Floette",
    "Floette-Blue",
    "Floette-Orange",
    "Floette-White",
    "Floette-Yellow",
    "Floette-Eternal",
  ], // floette
  671: [
    "Florges",
    "Florges-Blue",
    "Florges-Orange",
    "Florges-White",
    "Florges-Yellow",
  ], // florges
  676: [
    "Furfrou",
    "Furfrou-Heart",
    "Furfrou-Star",
    "Furfrou-Diamond",
    "Furfrou-Debutante",
    "Furfrou-Matron",
    "Furfrou-Dandy",
    "Furfrou-La Reine",
    "Furfrou-Kabuki",
    "Furfrou-Pharaoh",
  ], // furfrou
  678: ["Meowstic", "Meowstic-F"], // meowstic
  681: ["Aegislash", "Aegislash-Blade"], // aegislash
  705: ["Sliggoo", "Sliggoo-Hisui"], // sliggoo
  706: ["Goodra", "Goodra-Hisui"], // goodra
  710: ["Pumpkaboo", "Pumpkaboo-Small", "Pumpkaboo-Large", "Pumpkaboo-Super"], // pumpkaboo
  711: ["Gourgeist", "Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super"], // gourgeist
  713: ["Avalugg", "Avalugg-Hisui"], // avalugg
  716: ["Xerneas-Neutral", "Xerneas"], // xerneas
  718: ["Zygarde", "Zygarde-10%", "Zygarde-10%", "Zygarde", "Zygarde-Complete"], // zygarde
  719: ["Diancie", "Diancie-Mega"], // diancie
  720: ["Hoopa", "Hoopa-Unbound"], // hoopa
  724: ["Decidueye", "Decidueye-Hisui"], // decidueye
  735: ["Gumshoos", "Gumshoos-Totem"], // gumshoos
  738: ["Vikavolt", "Vikavolt-Totem"], // vikavolt
  741: ["Oricorio", "Oricorio-Pom-Pom", "Oricorio-Pa'u", "Oricorio-Sensu"], // oricorio
  743: ["Ribombee", "Ribombee-Totem"], // ribombee
  744: ["Rockruff", "Rockruff"], // rockruff
  745: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"], // lycanroc
  746: ["Wishiwashi", "Wishiwashi-School"], // wishiwashi
  752: ["Araquanid", "Araquanid-Totem"], // araquanid
  754: ["Lurantis", "Lurantis-Totem"], // lurantis
  758: ["Salazzle", "Salazzle-Totem"], // salazzle
  773: [
    "Silvally",
    "Silvally-Fighting",
    "Silvally-Flying",
    "Silvally-Poison",
    "Silvally-Ground",
    "Silvally-Rock",
    "Silvally-Bug",
    "Silvally-Ghost",
    "Silvally-Steel",
    "Silvally-Fire",
    "Silvally-Water",
    "Silvally-Grass",
    "Silvally-Electric",
    "Silvally-Psychic",
    "Silvally-Ice",
    "Silvally-Dragon",
    "Silvally-Dark",
    "Silvally-Fairy",
  ], // silvally
  774: [
    "Minior-Meteor",
    "Minior-Meteor",
    "Minior-Meteor",
    "Minior-Meteor",
    "Minior-Meteor",
    "Minior-Meteor",
    "Minior-Meteor",
    "Minior",
    "Minior-Orange",
    "Minior-Yellow",
    "Minior-Green",
    "Minior-Blue",
    "Minior-Indigo",
    "Minior-Violet",
  ], // minior
  777: ["Togedemaru", "Togedemaru-Totem"], // togedemaru
  778: ["Mimikyu", "Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem"], // mimikyu
  784: ["Kommo-o", "Kommo-o-Totem"], // kommoo
  800: [
    "Necrozma",
    "Necrozma-Dusk-Mane",
    "Necrozma-Dawn-Wings",
    "Necrozma-Ultra",
  ], // necrozma
  801: ["Magearna", "Magearna-Original"], // magearna
  845: ["Cramorant", "Cramorant-Gulping", "Cramorant-Gorging"], // cramorant
  849: ["Toxtricity", "Toxtricity-Low-Key"], // toxtricity
  854: ["Sinistea", "Sinistea-Antique"], // sinistea
  855: ["Polteageist", "Polteageist-Antique"], // polteageist
  869: [
    "Alcremie",
    "Alcremie-Ruby-Cream",
    "Alcremie-Matcha-Cream",
    "Alcremie-Mint-Cream",
    "Alcremie-Lemon-Cream",
    "Alcremie-Salted-Cream",
    "Alcremie-Ruby-Swirl",
    "Alcremie-Caramel-Swirl",
    "Alcremie-Rainbow-Swirl",
  ], // alcremie
  875: ["Eiscue", "Eiscue-Noice"], // eiscue
  876: ["Indeedee", "Indeedee-F"], // indeedee
  877: ["Morpeko", "Morpeko-Hangry"], // morpeko
  888: ["Zacian", "Zacian-Crowned"], // zacian
  889: ["Zamazenta", "Zamazenta-Crowned"], // zamazenta
  890: ["Eternatus", "Eternatus-Eternamax"], // eternatus
  892: ["Urshifu", "Urshifu-Rapid-Strike"], // urshifu
  893: ["Zarude", "Zarude-Dada"], // zarude
  898: ["Calyrex", "Calyrex-Ice", "Calyrex-Shadow"], // calyrex
  901: ["Ursaluna", "Ursaluna-Bloodmoon"], // ursaluna
  902: ["Basculegion", "Basculegion-F"], // basculegion
  905: ["Enamorus", "Enamorus-Therian"], // enamorus
  916: ["Oinkologne", "Oinkologne-F"], // oinkologne
  925: ["Maushold", "Maushold-Four"], // maushold
  931: [
    "Squawkabilly",
    "Squawkabilly-Blue",
    "Squawkabilly-Yellow",
    "Squawkabilly-White",
  ], // squawkabilly
  964: ["Palafin", "Palafin-Hero"], // palafin
  978: ["Tatsugiri", "Tatsugiri-Droopy", "Tatsugiri-Stretchy"], // tatsugiri
  982: ["Dudunsparce", "Dudunsparce-Three-Segment"], // dudunsparce
  999: ["Gimmighoul", "Gimmighoul-Roaming"], // gimmighoul
  1012: ["Poltchageist", "Poltchageist-Artisan"], // poltchageist
  1013: ["Sinistcha", "Sinistcha-Masterpiece"], // sinistcha
  1017: [
    "Ogerpon",
    "Ogerpon-Wellspring",
    "Ogerpon-Hearthflame",
    "Ogerpon-Cornerstone",
    "Ogerpon-Teal-Tera",
    "Ogerpon-Wellspring-Tera",
    "Ogerpon-Hearthflame-Tera",
    "Ogerpon-Cornerstone-Tera",
  ], // ogerpon
  1024: ["Terapagos", "Terapagos-Terastal", "Terapagos-Stellar"], // terapagos
};
