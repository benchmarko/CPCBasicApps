/* 0index.js - index file for BASIC examples */
/* globals cpcBasic */

"use strict";

cpcBasic.addIndex("apps", function () { /*
[
	{
    	"key": "apps/amsynthe",
		"title": "Amsynthe"
	},
	{
    	"key": "apps/amsynthp",
		"title": "Amsynthe Program"
	},
	{
    	"key": "apps/doodle/doodle",
		"title": "CPC Doodle"
	},
	{
    	"key": "apps/doodle/2cv.drw",
		"title": "2CV",
		"meta": "D"
	},
	{
    	"key": "apps/doodle/doodle.drw",
		"title": "Doodle Title",
		"meta": "D"
	},
	{
    	"key": "apps/doodle/mallet.drw",
		"title": "Mallet",
		"meta": "D"
	},
	{
    	"key": "apps/lifespan",
		"title": "Lifespan (Lebenserwartung)"
	},
	{
    	"key": "apps/mtext",
		"title": "Multitext CPC"
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
    	"key": "apps/tarot",
		"title": "Tarot Reader"
	},
	{
    	"key": "apps/timetest",
		"title": "Time Tester"
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
		"title": "Function Plotting (Funktionsplotting)"
	},
	{
    	"key": "basicode/imposfig",
		"title": "Impossible Figures (Unmoegliche Figuren)"
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
    	"key": "demo/boogle",
		"title": "Boogle"
	},
	{
    	"key": "demo/btilesim",
		"title": "British Council Tile / Bus Fabric Sim"
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
    	"key": "demo/gdemo",
		"title": "Graphics Demo 1 (Grafik Demo)"
	},
	{
    	"key": "demo/gdemo2",
		"title": "Graphics Demo 2 (Grafik Demo)"
	},
	{
    	"key": "demo/grafix",
		"title": "Grafix Demo"
	},
	{
    	"key": "demo/house",
		"title": "House for Sale"
	},
	{
    	"key": "demo/isgdemo",
		"title": "Interrupt & Sound & Grafik Demo"
	},
	{
    	"key": "demo/mondrian",
		"title": "Mondrian"
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
    	"key": "demo/sultans",
		"title": "Sultan's Maze Demo Screen"
	},
	{
    	"key": "games/basgame2",
		"title": "BASIC Game 2"
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
		"title": "Card Games: Blackjack (17 und 4) and Memory"
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
		"key": "games/duel",
		"title": "Duel (Duell)"
	},
	{
		"key": "games/emperor",
		"title": "Emperor (Kaiser)"
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
		"key": "games/inka",
		"title": "Inka Sogra"
	},
	{
		"key": "games/jackpot",
		"title": "Jack-Pot"
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
    	"key": "games/tanks",
		"title": "Tanks Alot!"
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
		"key": "music/asbtune",
		"title": "A small BASIC tune"
	},
	{
		"key": "music/axelf",
		"title": "Axel F (Harold Faltermeyer)"
	},
	{
		"key": "music/bach",
		"title": "Wohl mir,dass ich Jesum habe (J. S. Bach)"
	},
	{
		"key": "music/cancan",
		"title": "Can-Can (Infernal Galop, Jacques Offenbach)"
	},
	{
		"key": "music/clarinet",
		"title": "Clarinet (Klarinettenmuck'l, Jaroslav Skabrada)"
	},
	{
		"key": "music/cpcorgan",
		"title": "CPC organ (CPC-Orgel)"
	},
	{
		"key": "music/elise",
		"title": "Fuer Elise (Ludwig van Beethoven)"
	},
		{
		"key": "music/menuett",
		"title": "Menuett / Minuet (James Hook)"
	},
	{
		"key": "music/mexicana",
		"title": "Dance Mexicana (Jarabe Tapatio, Mexican Hat Dance)"
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
		"title": "Tico-Tico no Fubá (Zequinha de Abreu)"
	},
	{
		"key": "music/touch",
		"title": "U Can't Touch This (MC Hammer)"
	},
	{
		"key": "test/eramtst",
		"title": "Expansion RAM Test"
	}
]
*/ });
