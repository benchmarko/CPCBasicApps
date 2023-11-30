/* 0index.js - index file for BASIC examples */
/* globals cpcBasic */

"use strict";

cpcBasic.addIndex("apps", function () { /*
[
	{
    	"key": "apps/advedit",
		"title": "Adventure Editor"
	},
	{
    	"key": "apps/advint",
		"title": "Aventure Interpreter"
	},
	{
    	"key": "apps/ad_home.adv",
		"title": "Our Home Adventure",
		"meta": "D"
	},
	{
    	"key": "apps/ad_goldr.adv",
		"title": "Goldrush Adventure",
		"meta": "D"
	},
	{
    	"key": "apps/ad_adit.adv",
		"title": "Forest Adit/Tunnel Adventure",
		"meta": "D"
	},
	{
    	"key": "apps/amsynthe",
		"title": "Amsynthe"
	},
	{
    	"key": "apps/amsynthp",
		"title": "Amsynthe Program"
	},
	{
    	"key": "apps/anibas",
		"title": "animator BASIC Viewer"
	},
	{
    	"key": "apps/animator",
		"title": "Animator for 3D Models (TODO)"
	},
	{
    	"key": "apps/an_bipla.anc",
		"title": "Biplane Model",
		"meta": "D"
	},
	{
    	"key": "apps/an_bipla.and",
		"title": "Biplane Animation",
		"meta": "D"
	},
	{
    	"key": "apps/an_blimp.anc",
		"title": "Blimp Model",
		"meta": "D"
	},
	{
    	"key": "apps/an_blimp.and",
		"title": "Blimp Animation",
		"meta": "D"
	},
	{
    	"key": "apps/an_box3d.anc",
		"title": "Box 3D Model",
		"meta": "D"
	},
	{
    	"key": "apps/an_box3d.and",
		"title": "Box 3D Animation",
		"meta": "D"
	},
	{
    	"key": "apps/an_copym.anc",
		"title": "Copymate Model",
		"meta": "D"
	},
	{
    	"key": "apps/an_copym.and",
		"title": "Copymate Animation",
		"meta": "D"
	},
	{
    	"key": "apps/an_me109.anc",
		"title": "ME-109 Model",
		"meta": "D"
	},
	{
    	"key": "apps/an_me109.and",
		"title": "ME-109 Animation",
		"meta": "D"
	},
	{
    	"key": "apps/an_rg1.anc",
		"title": "RG-1 Model",
		"meta": "D"
	},
	{
    	"key": "apps/an_rg1.and",
		"title": "RG-1 Animation",
		"meta": "D"
	},
	{
    	"key": "apps/an_ufo.anc",
		"title": "UFO Model",
		"meta": "D"
	},
	{
    	"key": "apps/an_ufo.and",
		"title": "UFO Animation",
		"meta": "D"
	},
	{
    	"key": "apps/archidr",
		"title": "Little Architect Draw (BASIC)"
	},
	{
    	"key": "apps/archi1.bil",
		"title": "Little Architect Drawing Set 1",
		"meta": "D"
	},
	{
    	"key": "apps/archi2.bil",
		"title": "Little Architect Drawing Set 2",
		"meta": "D"
	},
	{
		"key": "apps/blkedit",
		"title": "Block Editor"
    },
	{
		"key": "apps/datafine",
		"title": "Datafine Database"
    },
	{
    	"key": "apps/doodle",
		"title": "CPC Doodle"
	},
	{
    	"key": "apps/do_2cv.drw",
		"title": "2CV Doodle Drawing",
		"meta": "D"
	},
	{
    	"key": "apps/do_malle.drw",
		"title": "Mallet Doodle Drawing",
		"meta": "D"
	},
	{
    	"key": "apps/doodle.drw",
		"title": "Doodle Title Drawing",
		"meta": "D"
	},
	{
		"key": "apps/drumkit",
		"title": "Amstrad Drumkit"
	},
	{
		"key": "apps/eliza",
		"title": "Eliza (Boss)"
	},
	{
		"key": "apps/endofmon",
		"title": "End of Month (Monatsende)"
	},
	{
		"key": "apps/filesel",
		"title": "File Select  (Library)"
	},
	{
		"key": "apps/geogra",
		"title": "Geographics (Erkunde)"
	},
	{
		"key": "apps/heating",
		"title": "Efficiency calculation of heating"
	},
	{
		"key": "apps/hyphen",
		"title": "Hyphenation (Silbentrennung)"
	},
	{
    	"key": "apps/lifespan",
		"title": "Lifespan (Lebenserwartung)"
	},
	{
		"key": "apps/morse",
		"title": "Morse Code (Morsen)"
	},
	{
    	"key": "apps/mtext",
		"title": "Multitext CPC"
	},
	{
    	"key": "apps/question",
		"title": "Question and answer"
	},
	{
    	"key": "apps/retrols",
		"title": "Retro-Loadsheet"
	},
	{
    	"key": "apps/sayit",
		"title": "Sayit (Sags)"
	},
	{
    	"key": "apps/sygen",
		"title": "Symbol Generator 2x2"
	},
	{
    	"key": "apps/symbol",
		"title": "Define Symbol"
	},
	{
    	"key": "apps/tester",
		"title": "Tester"
	},
	{
		"key": "apps/tester1.zip",
		"title": "Tester Data",
		"meta": "D"
	},
	{
    	"key": "apps/timetest",
		"title": "Time Tester"
	},
	{
		"key": "apps/vidi",
		"title": "VIDI - Der Videofilmverwalter"
	},
	{
		"key": "apps/vidi_v2k.fil",
		"title": "VIDI - Video 2000 Sammlung",
		"meta": "D"
	},
	{
		"key": "apps/vidi_vhs.fil",
		"title": "VIDI - VHS Sammlung",
		"meta": "D"
	},
	{
		"key": "apps/vocabula",
		"title": "Vocabulary Test (Vokabeltest)"
	},
	{
    	"key": "basicode/basicode",
		"title": "BasiCode Library"
	},
	{
    	"key": "basicode/bchelp",
		"title": "BC Help (BC Hilfe)"
	},
	{
    	"key": "basicode/countries",
		"title": "Countries and Cities (Landen)"
	},
	{
    	"key": "basicode/doctor",
		"title": "Doctor"
	},
	{
    	"key": "basicode/ellipses",
		"title": "Ellipses (Ellipsen)"
	},
	{
    	"key": "basicode/figures",
		"title": "Figures (Figuren)"
	},
	{
    	"key": "basicode/friendsh",
		"title": "Friendship"
	},
	{
    	"key": "basicode/funcplot",
		"title": "Function Plotting (Funktionen)"
	},
	{
    	"key": "basicode/imposfig",
		"title": "Impossible Figures (Figuren)"
	},
	{
    	"key": "basicode/nonius",
		"title": "Nonius (Vernier Scale)"
	},
	{
    	"key": "basicode/reaction",
		"title": "Reaction"
	},
	{
    	"key": "basicode/rotation",
		"title": "Rotation"
	},
	{
    	"key": "basicode/rsa1",
		"title": "RSA 1 (Intro, Key)"
	},
	{
    	"key": "basicode/rsa2",
		"title": "RSA 2 (Encode)"
	},
	{
    	"key": "basicode/rsa3",
		"title": "RSA 3 (Decode)"
	},
		{
    	"key": "basicode/tennis",
		"title": "Tennis"
	},
	{
    	"key": "basicode/typen",
		"title": "Typen"
	},
	{
    	"key": "demo/10print",
		"title": "10 PRINT"
	},
	{
    	"key": "demo/100demo",
		"title": "100% BASIC Demo"
	},
	{
    	"key": "demo/acpc6128",
		"title": "Amstrad CPC 6128 Demo"
	},
	{
    	"key": "demo/art",
		"title": "Art: Screens Unlimited"
	},
	{
    	"key": "demo/asciiart",
		"title": "ASCII Art"
	},
	{
    	"key": "demo/basworld",
		"title": "BASIC World Demo"
	},
		{
    	"key": "demo/blitter",
		"title": "Blitter"
	},
	{
    	"key": "demo/boogle",
		"title": "Boogle"
	},
	{
    	"key": "demo/btilesim",
		"title": "British Council Tile Sim"
	},
	{
    	"key": "demo/circlewr",
		"title": "Circle Writer"
	},
	{
    	"key": "demo/flags",
		"title": "Flags of the World"
	},
	{
    	"key": "demo/frames",
		"title": "Frames Screen Saver"
	},
	{
    	"key": "demo/frames",
		"title": "Frames"
	},
	{
    	"key": "demo/gdemo",
		"title": "Graphics Demo 1"
	},
	{
    	"key": "demo/gdemo2",
		"title": "Graphics Demo 2"
	},
	{
    	"key": "demo/grafix",
		"title": "Grafix Demo"
	},
	{
    	"key": "demo/hello1",
		"title": "Hello World"
	},
	{
    	"key": "demo/house",
		"title": "House for Sale"
	},
	{
    	"key": "demo/isgdemo",
		"title": "Interrupt/Sound/Graphics Demo"
	},
	{
    	"key": "demo/lifegame",
		"title": "Game of Life"
	},
	{
    	"key": "demo/mondrian",
		"title": "Mondrian"
	},
	{
    	"key": "demo/nicholas",
		"title": "House of St Nicholas"
	},
	{
    	"key": "demo/nosmoke",
		"title": "No Smoking (Screen)"
	},
	{
    	"key": "demo/popsi",
		"title": "Popsi (Screen)"
	},
	{
		"key": "demo/rayclip",
		"title": "Ray Eclipse"
	},
	{
		"key": "demo/scanner",
		"title": "The Scannerisator"
	},
	{
		"key": "demo/scanner1.zip",
		"title": "The Scannerisator Data",
		"meta": "D"
	},
    {
    	"key": "demo/scpc6128",
		"title": "Schneider CPC 6128 Demo"
	},
	{
    	"key": "demo/scpc6128.dat",
		"title": "Data for logo in demo scpc6128 (schlogo)",
		"meta": "D"
	},
	{
    	"key": "demo/serpent",
		"title": "Serpent"
	},
	{
    	"key": "demo/sultan",
		"title": "Sultan's Maze Demo Screen"
	},
	{
    	"key": "games/3dfour",
		"title": "3D-Four In A Row"
	},
	{
    	"key": "games/artwar",
		"title": "Art War (Loader)"
	},
	{
    	"key": "games/artwar2",
		"title": "Art War (Program)"
	},
	{
		"key": "games/artwarsc.zip",
		"title": "Art War (Screens)",
		"meta": "D"
	},
	{
    	"key": "games/assess",
		"title": "Assessment"
	},
	{
    	"key": "games/atombu",
		"title": "Atombunker"
	},
	{
    	"key": "games/atombu0.dat",
		"title": "Atombu data 0",
		"meta": "D"
	},
	{
    	"key": "games/atombu1.dat",
		"title": "Atombu data 1",
		"meta": "D"
	},
	{
    	"key": "games/atombu2.dat",
		"title": "Atombu data 2",
		"meta": "D"
	},
	{
    	"key": "games/atomed",
		"title": "Atombunker Editor"
	},
	{
    	"key": "games/ballcra",
		"title": "Ball Cracker"
	},
	{
    	"key": "games/balloon",
		"title": "Balloon"
	},
	{
    	"key": "games/basgame2",
		"title": "BASIC Game 2"
	},
	{
    	"key": "games/bigprice",
		"title": "Big Price (Der Grosse Preis)"
	},
	{
    	"key": "games/budrumi",
		"title": "Budrumi"
	},
	{
		"key": "games/budrumis.zip",
		"title": "Budrumi (Screens)",
		"meta": "D"
	},
	{
		"key": "games/canabalt",
		"title": "CPC Anabalt"
	},
	{
		"key": "games/canyons",
		"title": "Canyons of Cannons"
	},
	{
		"key": "games/cardrive",
		"title": "Car Drive (Autofahren)"
	},
	{
		"key": "games/cards",
		"title": "Card Games: Blackjack, Memory"
	},
	{
		"key": "games/catch",
		"title": "Catch"
	},
	{
		"key": "games/cityland",
		"title": "Citylander"
	},
	{
		"key": "games/clearpa",
		"title": "Clear Path"
	},
	{
		"key": "games/clumsy",
		"title": "Clumsy Control"
	},
	{
		"key": "games/connect4",
		"title": "Connect 4 (Tower: 4 Gewinnt)"
	},
	{
		"key": "games/copter",
		"title": "Copter Patrol"
	},
	{
		"key": "games/crib",
		"title": "Cribbage (v1)"
	},
	{
		"key": "games/cribbage",
		"title": "Cribbage (v2)"
	},
	{
		"key": "games/dambust",
		"title": "Dambusters"
	},
	{
		"key": "games/dihunt",
		"title": "Diamond Hunt"
	},
	{
		"key": "games/duel",
		"title": "Duel (Duell)"
	},
	{
		"key": "games/dungeons",
		"title": "Dungeons (8 Bit Dungeons)"
	},
	{
		"key": "games/emperor",
		"title": "Emperor (Kaiser)"
	},
	{
		"key": "games/engelber",
		"title": "Engelbert"
	},
	{
		"key": "games/garfunkl",
		"title": "Garfunkel"
	},
	{
		"key": "games/goldrush",
		"title": "Goldrush (Goldrausch)"
	},
	{
		"key": "games/helicop",
		"title": "Helicopter"
	},
	{
		"key": "games/hopper",
		"title": "Hopper (Hüpfer)"
	},
	{
		"key": "games/hopper2",
		"title": "Hopper: Main Part (Hüpfer)"
	},
	{
		"key": "games/inka",
		"title": "Inka Sogra"
	},
	{
		"key": "games/jackpot",
		"title": "Jack-Pot"
	},
	{
		"key": "games/joker",
		"title": "Black Joker (Der Schwarze Joker)"
	},
	{
		"key": "games/klondike",
		"title": "Klondike"
	},
	{
		"key": "games/lander",
		"title": "Lander"
	},
	{
    	"key": "games/lenin",
		"title": "Leningrad (Loader)"
	},
	{
    	"key": "games/lenin2",
		"title": "Leningrad (Program)"
	},
	{
		"key": "games/leninsc.zip",
		"title": "Leningrad (Screens)",
		"meta": "D"
	},
	{
		"key": "games/maze",
		"title": "Maze"
	},
	{
		"key": "games/mchess",
		"title": "Micro Chess"
	},
	{
		"key": "games/mchess.dat",
		"title": "Micro Chess Data",
		"meta": "D"
	},
	{
		"key": "games/mon10zum",
		"title": "MonTenZuma"
	},
	{
		"key": "games/olicrown",
		"title": "Olli's Crown"
	},
	{
		"key": "games/painty",
		"title": "Painty"
	},
	{
		"key": "games/patience",
		"title": "Patience: The Card Game"
	},
	{
		"key": "games/preside",
		"title": "President (Praesident)"
	},
	{
		"key": "games/roguedes",
		"title": "Rogue Descender"
	},
	{
		"key": "games/scolor",
		"title": "Shielding Color"
	},
	{
		"key": "games/shot",
		"title": "Shot Game (Textual)"
	},
	{
		"key": "games/smily",
		"title": "Smily"
	},
	{
		"key": "games/solita2",
		"title": "Solitaire 2"
	},
	{
		"key": "games/solitair",
		"title": "Solitaire"
	},
	{
		"key": "games/spaceba",
		"title": "Space Base"
	},
	{
		"key": "games/spacera",
		"title": "Space Race"
	},
	{
		"key": "games/spacewar",
		"title": "Spacewar Game"
	},
	{
		"key": "games/stardodg",
		"title": "Stardodger Game"
	},
	{
		"key": "games/states",
		"title": "States of the Earth"
	},
	{
		"key": "games/statesfx",
		"title": "States of the Earth",
		"meta": "D"
	},
	{
    	"key": "games/sultan",
		"title": "Sultan's Maze: Amsoft Logo"
	},
	{
    	"key": "games/sultan2",
		"title": "Sultan's Maze: Game"
	},
	{
    	"key": "games/sunburst",
		"title": "Sunburst Contamination"
	},
	{
    	"key": "games/swamp",
		"title": "Swamp"
	},
	{
    	"key": "games/tanks",
		"title": "Tanks Alot!"
	},
	{
    	"key": "games/tarot",
		"title": "Tarot Reader"
	},
	{
    	"key": "games/titan",
		"title": "Titan"
	},
	{
    	"key": "games/tower",
		"title": "Tower"
	},
	{
		"key": "games/yahtzee",
		"title": "Yahtzee (Kniffel)"
	},
	{
		"key": "games/yahtzee2",
		"title": "Yahtzee 2 (Kniffel)"
	},
	{
    	"key": "math/anageo",
		"title": "Analytical Geometry"
	},
	{
    	"key": "math/complex",
		"title": "Complex numbers (Komplexe Zahlen)"
	},
	{
    	"key": "math/derivat",
		"title": "Derivatives of Polynomials (Ableitung)"
	},
	{
    	"key": "math/division",
		"title": "Division of long numbers (Division)"
	},
	{
    	"key": "math/euler",
		"title": "Compute e with 1000 digits"
	},
	{
    	"key": "math/factorials",
		"title": "Big Factorials (Fakultaeten)"
    },
	{
		"key": "math/fractals",
		"title": "Fractals"
	},
	{
    	"key": "math/fractions",
		"title": "Fractions (Bruchrechnen)"
	},
	{
    	"key": "math/funcarea",
		"title": "Functional Area"
	},
	{
    	"key": "math/funcspec",
		"title": "Functional Spectrum"
	},
	{
    	"key": "math/graph6",
		"title": "3D Hidden Line Removel Graph"
	},
		{
    	"key": "math/logicals",
		"title": "Logicals"
	},
	{
    	"key": "math/ninedig2",
		"title": "Nine Digits 2 (tokenized)"
	},
	{
    	"key": "math/quadfunc",
		"title": "Quadratic Function"
	},
	{
    	"key": "math/raytrace",
		"title": "Raytracing"
	},
	{
    	"key": "math/regress",
		"title": "Regression (Ausgleich)"
	},
	{
    	"key": "math/striart",
		"title": "String Art"
	},
	{
		"key": "music/asbtune",
		"title": "A small BASIC tune"
	},
	{
		"key": "music/axelf",
		"title": "Axel F (Harold Faltermeyer)"
	},
	{
		"key": "music/bach",
		"title": "Wohl mir,... (J. S. Bach)"
	},
	{
		"key": "music/cancan",
		"title": "Can-Can (Infernal Galop)"
	},
	{
		"key": "music/clarinet",
		"title": "Clarinet (Klarinettenmuck'l)"
	},
	{
		"key": "music/cpcorgan",
		"title": "CPC organ (CPC-Orgel)"
	},
	{
		"key": "music/dthymne",
		"title": "Deutschland Hymne"
	},
	{
		"key": "music/elise",
		"title": "Fuer Elise (L. v. Beethoven)"
	},
	{
		"key": "music/menuett",
		"title": "Menuett / Minuet (James Hook)"
	},
	{
		"key": "music/mexicana",
		"title": "Dance Mexicana"
	},
	{
		"key": "music/rocking",
		"title": "Rocking CPC"
	},
	{
		"key": "music/roxette",
		"title": "Roxette: Listen To Your Heart"
	},
	{
		"key": "music/ticotico",
		"title": "Tico-Tico no Fubá"
	},
	{
		"key": "music/touch",
		"title": "U Can't Touch This (MC Hammer)"
	},
	{
		"key": "test/1st",
		"title": "First Test Program (empty)"
	},
	{
    	"key": "test/art",
		"title": "Computer Art"
	},
	{
		"key": "test/basbankm",
		"title": "Basic Bank Manager"
	},
	{
    	"key": "test/blocky",
		"title": "Blocky CPC Demo"
	},
	{
		"key": "test/bmbench3",
		"title": "BM Benchmark 3"
	},
	{
		"key": "test/bmbench8",
		"title": "BM Benchmark 8"
	},
	{
    	"key": "test/broken",
		"title": "Broken Keyboard (Kaputt)"
	},
	{
    	"key": "test/charset",
		"title": "Character set"
	},
	{
    	"key": "test/circles",
		"title": "Drawing circles"
    },
	{
		"key": "test/circlewr",
		"title": "Circle Writer"
    },
	{
    	"key": "test/colors",
		"title": "Colors CPC Demo"
	},
	{
    	"key": "test/cpc464ch",
		"title": "CPC 464 Character Art"
	},
	{
    	"key": "test/cpcbasic",
		"title": "CPC Basic"
	},
	{
    	"key": "test/cpclib",
		"title": "CPC Lib"
	},
	{
    	"key": "test/cpcmhz",
		"title": "CPC Mhz"
	},
	{
		"key": "test/crtctest",
		"title": "CRTC Test"
	},
	{
		"key": "test/crypto1",
		"title": "Cryptology 1"
	},
	{
		"key": "test/detoken",
		"title": "Detokenize BASIC program"
	},
	{
		"key": "test/energy0",
		"title": "Energy Collectors 0 (Game)"
	},
	{
		"key": "test/energy1",
		"title": "Energy Collectors 1 (Game)"
	},
	{
		"key": "test/energysa",
		"title": "Energy Savers (Game)"
	},
	{
		"key": "test/eramtst",
		"title": "Expansion RAM Test"
	},
	{
    	"key": "test/fancy",
		"title": "Test copychr$"
	},
	{
    	"key": "test/fill",
		"title": "Test Fill"
	},
	{
    	"key": "test/graphics",
		"title": "Graphics CPC Demo"
	},
	{
		"key": "test/jump1",
		"title": "Jump Test 1"
	},
	{
		"key": "test/keyboard",
		"title": "Keyboard Test"
	},
	{
		"key": "test/labyrint",
		"title": "Labyrinth"
	},
	{
		"key": "test/landscap",
		"title": "Landscape"
	},
	{
		"key": "test/linemask",
		"title": "Line Mask"
	},
	{
		"key": "test/mouse",
		"title": "Mouse escaping from maze"
	},
	{
		"key": "test/mousepa",
		"title": "Mouse Painting"
	},
	{
		"key": "test/movepack",
		"title": "Move Pack"
	},
	{
		"key": "test/piechart",
		"title": "Pie Chart"
	},
	{
		"key": "test/pixelscr",
		"title": "Pixel Scroll"
	},
	{
		"key": "test/pixeltst",
		"title": "Pixel Test (Mode 0)"
	},
	{
		"key": "test/ramtest",
		"title": "RAM Test"
	},
	{
    	"key": "test/rasterci",
		"title": "Raster Circle"
	},
	{
		"key": "test/rectangl",
		"title": "Rectangles Test"
	},
	{
		"key": "test/reftime",
		"title": "Reference Timings"
	},
	{
		"key": "test/rot13",
		"title": "ROT13 Caesar Cipher"
	},
	{
		"key": "test/rotatio",
		"title": "Rotatio"
	},
	{
		"key": "test/scrtest",
		"title": "Screen Memory Test"
	},
	{
		"key": "test/scrudu",
		"title": "Scrudu (Gedichte)"
	},
	{
		"key": "test/scrudu.vok",
		"title": "Scrudu Vocabulary",
		"meta": "D"
	},
	{
		"key": "test/seconds",
		"title": "Seconds Test"
	},
	{
		"key": "test/simple",
		"title": "Simple Labyrinth"
	},
	{
		"key": "test/snake42",
		"title": "Snake 4 Two"
	},
	{
		"key": "test/soundte1",
		"title": "Sound Test 1"
	},
	{
		"key": "test/sphere",
		"title": "Sphere"
	},
	{
		"key": "test/stars",
		"title": "Stars Test 1 and 2"
	}
]
*/ });
