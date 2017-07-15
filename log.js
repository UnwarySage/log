/*

  L O G

  This was supposed to be a JSON file, but I'm having trouble implementing it. The log entry names are dates and times in hexadecimal form to reduce file size.

  s = start time
  e = end time
  c = category
  t = title
  d = description

  COD = coding
  VIS = graphics
  AUD = music
  ACA = academics
  RES = research
  MNT = maintenance
  LEI = leisure
  DIY = DIY projects
  ART = drawing, sketching, painting

*/

var log = [
{"n":"65BFDAD9","s":2217,"e":2219,"c":"COD","t":"Log","d":"This is a test"},
{"n":"65BFFD52","s":1042,"e":1112,"c":"RES","t":"Game Dev","d":"Looking for Linux game dev software"},
{"n":"65BFFDAE","s":1134,"e":1151,"c":"RES","t":"GIMP","d":"Researching GIMP automation processes"},
{"n":"65BFFDF0","s":1200,"e":1212,"c":"COD","t":"Log","d":"Updating Log repository"},
{"n":"65BFFE63","s":1315,"e":1341,"c":"LEI","t":"Consumption","d":"Watching YouTube videos lol"},
{"n":"65BFFE7E","s":1342,"e":1346,"c":"COD","t":"Log","d":"Updating Log repository"},
{"n":"65BFFEBD","s":1405,"e":1606,"c":"COD","t":"Texte","d":"Building a tool for creating text games"},
{"n":"65C00067","s":1831,"e":1937,"c":"COD","t":"Texte","d":"Took a nap. Now continuing development"},
{"n":"65C0011D","s":2013,"e":2215,"c":"COD","t":"Texte","d":"Resuming dev"},
{"n":"65C0240B","s":955,"e":1152,"c":"COD","t":"Log","d":"Working on log data visualisation"},
{"n":"65C0251F","s":1231,"e":1653,"c":"COD","t":"Log","d":"Working on log data visualisation"},
{"n":"65c026c6","s":1654,"e":1719,"c":"MUS","t":"Piano","d":"Taking a break from coding"},
{"n":"65c02708","s":1720,"e":1829,"c":"COD","t":"Log","d":"Building log dashboard"},
{"n":"65c02780","s":1840,"e":1854,"c":"COD","t":"MONOCAL","d":"Fixing script error"},
{"n":"65c02791","s":1857,"e":1901,"c":"WRT","t":"Blog","d":"Updating MONOCAL post"},
{"n":"65c02838","s":2024,"e":2049,"c":"COD","t":"GitHub","d":"Cleaning up code, updating readme's"},
{"n":"65c028a9","s":2137,"e":2206,"c":"WEB","t":"Tumblr","d":"Updating my Tumblrs"},
{"n":"65c04b15","s":0949,"e":1054,"c":"MNT","t":"Maintenance","d":"Decluttering and organising files"},
{"n":"65c04bb7","s":1111,"e":1159,"c":"MNT","t":"GitHub","d":"Improving code readability; my future self is often annoyed"},
{"n":"65c04e25","s":1733,"e":1855,"c":"COD","t":"MONOCAL","d":"Rewriting MONOCAL"},
{"n":"65c04f41","s":2017,"e":2023,"c":"WRT","t":"Blog","d":"Revising MONOCAL post again"},
{"n":"65c04f4b","s":2027,"e":2057,"c":"COD","t":"MONOCAL","d":"Fixing yet another error in my calculations"},
{"n":"65c04f9a","s":2106,"e":2233,"c":"COD","t":"MONOCAL","d":"Another bug! D:"},
{"n":"65c07289","s":1049,"e":1120,"c":"MNT","t":"GitHub","d":"Organising repositories"},
{"n":"65c072d0","s":1120,"e":1141,"c":"RES","t":"GitHub","d":"Browsing through GitHub, looking for interesting things"},
{"n":"65c072f7","s":1159,"e":1223,"c":"COD","t":"Tumblr","d":"Working on a new Tumblr theme"},
{"n":"65c07347","s":1239,"e":1352,"c":"COD","t":"Grindval","d":"Developing a Tumblr theme"},
{"n":"65c073ba","s":1354,"e":1436,"c":"COD","t":"Automation","d":"Creating automation scripts"},
{"n":"65c0740c","s":1436,"e":1803,"c":"COD","t":"Macian","d":"Coding"},
{"n":"65c07586","s":1814,"e":2030,"c":"MNT","t":"Photos","d":"Transferring and organising photo library"},
{"n":"65c076b0","s":2112,"e":2143,"c":"MNT","t":"Photos","d":"Decluttering photo library"},
{"n":"65c076d0","s":2144,"e":2203,"c":"COD","t":"Log","d":"Fixing duration issue"},
{"n":"65c0770e","s":2206,"e":2232,"c":"COD","t":"Log","d":"Oops. Fixing again"},
{"n":"65c098bb","s":0827,"e":0855,"c":"COD","t":"Habitica","d":"Revisiting an old Habitica API project"},
{"n":"65c0992f","s":0943,"e":1013,"c":"COD","t":"Habitica","d":"Continuing"},
{"n":"65c0997a","s":1018,"e":1021,"c":"COD","t":"Automation","d":"Creating some IFTTT recipes"},
{"n":"65c0997e","s":1022,"e":1038,"c":"RES","t":"Text Editor","d":"Looking for faster, lighter alternatives to Atom"},
{"n":"65c0998f","s":1039,"e":1050,"c":"ETC","t":"Atom","d":"Reconfiguring Atom. I'll just stick to this editor"},
{"n":"65c0999d","s":1053,"e":1100,"c":"COD","t":"GitHub","d":"Automating GitHub"},
{"n":"65c099dc","s":1116,"e":1127,"c":"MNT","t":"Web","d":"Cleaning up bookmarks"},
{"n":"65c099e8","s":1128,"e":1140,"c":"RES","t":"JS","d":"Researching how to make JS more efficient"},
{"n":"65c099f4","s":1140,"e":1153,"c":"RES","t":"Shell","d":"Reading about shell scripts, looking for inspiration"},
{"n":"65c09aad","s":1325,"e":1342,"c":"MSC","t":"Piano","d":"Practicing"},
{"n":"65c09ac9","s":1353,"e":1505,"c":"COD","t":"MONOCAL","d":"Updating MONOCAL"},
{"n":"65c09b7e","s":1534,"e":1639,"c":"COD","t":"Macian","d":"Getting ready to publish Macian"},
{"n":"65c09be7","s":1639,"e":1701,"c":"LEI","t":"Games","d":"Taking a break from coding"},
{"n":"65c09c48","s":1736,"e":1932,"c":"WRT","t":"Worldbuild","d":"Worldbuilding"},
{"n":"65c09d74","s":2036,"e":2124,"c":"COD","t":"Macian","d":"Working on Macian"},
{"n":"65c09dcc","s":2124,"e":2143,"c":"PHO","t":"Photos","d":"Photo editing"},
{"n":"65c0c022","s":0914,"e":1106,"c":"RES","t":"Mithvaer","d":"Worldbuilding"},
{"n":"65c0c0fd","s":1133,"e":1323,"c":"MNT","t":"Apollo","d":"Refurbishing my old laptop, installing Linux"},
{"n":"65c0e748","s":0936,"e":1028,"c":"MNT","t":"Bateau","d":"Setting up Bateau as a portable workstation"},
{"n":"65c0e7a6","s":1030,"e":1203,"c":"WRT","t":"Mithvaer","d":"Worldbuilding"},
{"n":"65c0e87c","s":1244,"e":1332,"c":"COD","t":"Compendium","d":"Building a knowledge base for worldbuilding"},
{"n":"65c0e929","s":1417,"e":1440,"c":"COD","t":"Automation","d":"Updating shell scripts"},
{"n":"65c0e94e","s":1454,"e":1540,"c":"COD","t":"MONOCAL","d":"Porting to bash"},
{"n":"65c0e9f9","s":1625,"e":2231,"c":"COD","t":"Subterraneum","d":"Updating joshavanier.github.io"},
{"n":"65c10ffc","s":1356,"e":1452,"c":"HOM","t":"Decluttering","d":"Reassessing my possessions"},
{"n":"65c11111","s":1633,"e":1754,"c":"MNT","t":"Bateau","d":"Opting for a purely Xubuntu machine"},
{"n":"65c11249","s":1945,"e":2038,"c":"COD","t":"Aequirys","d":"Creating a calendrical system for Mithvaer"},
]